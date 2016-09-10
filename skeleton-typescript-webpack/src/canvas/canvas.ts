import {Router, RouterConfiguration} from "aurelia-router";

export class Canvas {
  router: Router;

  heading = "Contenu";

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: [""], name: "welcome",       moduleId: "./welcome",       nav: false, title: "" },
      { route: "example-simple",  name: "example-simple", moduleId: "./examples/example-simple",  nav: true, title: "First blood" },
      { route: "example-events",  name: "example-events", moduleId: "./examples/example-events",  nav: true, title: "Événements" },
      { route: "example-paths",   name: "example-paths",  moduleId: "./examples/example-paths",   nav: true, title: "Paths" },
      { route: "example-plugin",  name: "example-plugin", moduleId: "./examples/example-plugin",  nav: true, title: "Plugin" },
      { route: "particularities", name: "particularities",moduleId: "./particularities",          nav: true, title: "Particularités" },
      { route: "resources",       name: "resources",      moduleId: "./resources",                nav: true, title: "Resources" }
    ]);

    this.router = router;
  }
}
