import { createNavbar } from "./navbar.js";
import { products } from "./products.js";
import { showCase } from "./show-case.js";
import { whoAre } from "./who-are.js";
import { contact } from "./contact.js";
import { footer } from "./footer.js";

export const App = () => {
  createNavbar();
  showCase();
  whoAre();
  products();
  contact();
  footer();
};

App();
