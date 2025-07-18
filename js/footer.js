export const footer = async () => {
  const section = document.createElement("footer");
  section.setAttribute("id", "container-footer");
  const content = document.createElement("ul");
  content.innerHTML = `
     <li>
          <a
            href="https://www.facebook.com/profile.php?id=100053604667068"
            target="_blank"
          >
            <img src="./img/Icono/facebook_logo_icon_147291.ico" alt="FACEBOOK"
          /></a>
        </li>

        <li>
          <a href="https://www.instagram.com/amesa.sa/?hl=es" target="_blank">
            <img
              src="./img/Icono/Instagram_icon-icons.com_66804.ico"
              alt="Instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/amesa_sa/status/1283950476321595392"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./img/Icono/twitter_x_new_logo_x_rounded_icon_256078.ico"
              alt="X"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/amesa-lukiven/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./img/Icono/in_linked_linkedin_media_social_icon_124259.ico"
              alt="LINKEDIN"
          /></a>
        </li>
    `;
  const p = document.createElement("p");
  p.innerHTML = `
        Empresa Aliada del Grupo Lukiven.S.A Derechos Reservados por AMESA
        &copy; 2025
    `;
  const email = document.createElement("div");
  email.innerHTML = `
    <p>
        Contacto:
        <a href="mailto:" target="_blank"
        >gerencia.ventas@ame-s-a.com</a
        >
    </p>
    `;
  section.appendChild(content);
  section.appendChild(p);
  section.appendChild(email);
  const contactDiv = document.getElementById("contact");
  if (contactDiv) {
    contactDiv.insertAdjacentElement("afterend", section);
  } else {
    document.body.appendChild(section);
  }
};
