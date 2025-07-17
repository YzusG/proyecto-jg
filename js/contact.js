export const contact = () => {
  const section = document.createElement("section");
  section.setAttribute("id", "contact");
  const img = document.createElement("div");
  img.setAttribute("class", "img-contact");
  const form = document.createElement("form");
  form.innerHTML = `
    <fieldset>
        <legend>Contacto</legend>
        <label for="name">Nombre</label><br />
        <input type="text" /><br />
        <label for="email">Correo Electronico</label><br />
        <input type="email" name="email" id="email" /><br />
        <label for="textarea">Consulta</label><br />
        <textarea name="consulta" id="consulta"></textarea>
    </fieldset>
    `;
  section.appendChild(img);
  section.appendChild(form);
  const productsContainer = document.getElementById("products");
  if (productsContainer) {
    productsContainer.insertAdjacentElement("afterend", section);
  } else {
    document.body.appendChild(section);
  }
};
