export const showCase = () => {
  const main = document.createElement("main");
  main.setAttribute("id", "show-case");
  const div = document.createElement("div");
  div.innerHTML = `
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum
        dolorem ad quae dolore reprehenderit ipsum qui at natus, rerum optio
        repudiandae distinctio. Repellat voluptatibus fugiat eaque, atque modi
        non!
    </p>
  `;
  main.appendChild(div);
  document.body.appendChild(main);
};
