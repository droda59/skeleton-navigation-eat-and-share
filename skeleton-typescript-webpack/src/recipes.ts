import {lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

interface IRecipe {
    _id: string;
    title: string;
    smallImageUrl: string;
}

export class Recipes {
  heading: string = 'elee.menu Recipes';
  recipes: Array<IRecipe> = [];
  http: HttpClient;

  constructor(@lazy(HttpClient) private getHttpClient: () => HttpClient) {}

  async activate(): Promise<void> {
    // ensure fetch is polyfilled before we create the http client
    await fetch;
    const http = this.http = this.getHttpClient();
    http.configure(config => {
        config
            .useStandardConfiguration()
            .withBaseUrl("http://eleeapi.azurewebsites.net/");
    });

    const response = await http.fetch('api/quickrecipe/search?query=');
    this.recipes = await response.json();
  }
}
