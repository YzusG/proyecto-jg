export const createNavbar = () => {
  const navbarContainer = document.createElement("navbar");
  const logo = document.createElement("div");
  logo.innerHTML = '<img src="/img/LOGO AMESA NUEVO.png" alt="Logo-AMESA">';
  navbarContainer.appendChild(logo);
};
