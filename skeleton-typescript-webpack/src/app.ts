import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Eat & Share: Canvas';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title: 'Form' },
      { route: 'recipes',         name: 'recipes',        moduleId: './recipes',        nav: true, title: 'Recipes' },
      { route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' },
      { route: 'canvas',        name: 'canvas',       moduleId: './canvas/canvas', nav: true, title: 'Canvas' }
    ]);

    this.router = router;
  }
}
