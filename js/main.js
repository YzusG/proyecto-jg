import { createNavbar } from "./navbar.js";
import { showCase } from "./show-case.js";
import { whoAre } from "./who-are.js";

export const App = () => {
  createNavbar();
  showCase();
  whoAre();
};

App();
