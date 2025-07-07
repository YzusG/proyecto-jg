export const whoAre = function whoAre() {
  const section = document.createElement("section");
  const container = document.createElement("div");
  const whoImg = document.createElement("div");
  const p = document.createElement("p");

  p.innerHTML = `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        voluptate corrupti quaerat! Id libero, rerum debitis a, adipisci vel
        distinctio ab exercitationem tenetur deserunt ut quos minus dolorem
        unde incidunt?
    `;
  whoImg.setAttribute("id", "image-somos");
  container.setAttribute("class", "who-container");
  section.setAttribute("id", "quienes-somos");

  container.appendChild(whoImg);
  container.appendChild(p);
  section.appendChild(container);
  document.body.appendChild(section);
};
