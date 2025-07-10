export const createNavbar = () => {
  const navbarContainer = document.createElement("header");
  navbarContainer.setAttribute("class", "navbar-container");
  const logo = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", "./img/logo.png");
  logo.appendChild(img);

  const navbar = document.createElement("nav");
  navbar.setAttribute("id", "navbar");
  navbar.innerHTML = `
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#quienes-somos">Quienes Somos</a></li>
          <li><a href="#products">Productos</a></li>
          <li><a href="#contact">Contactos</a></li>
        </ul>`;
  navbarContainer.appendChild(logo);
  navbarContainer.appendChild(navbar);
  document.body.appendChild(navbarContainer);
};
