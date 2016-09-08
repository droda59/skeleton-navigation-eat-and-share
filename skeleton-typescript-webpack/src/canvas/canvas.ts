import {Router, RouterConfiguration} from "aurelia-router";

export class Canvas {
  router: Router;

  heading = "Examples";

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: [""], name: "welcome",       moduleId: "./welcome",       nav: false, title: "" },
      { route: "resources", name: "resources",       moduleId: "./resources",       nav: false, title: "Resources" },
      { route: "example-simple",  name: "example-simple", moduleId: "./examples/example-simple", nav: true, title: "First blood" },
      { route: "example-events",  name: "example-events", moduleId: "./examples/example-events", nav: true, title: "Événements" },
      { route: "example-plugin",  name: "example-plugin", moduleId: "./examples/example-plugin", nav: true, title: "Plugin" }
    ]);

    this.router = router;
  }
}
