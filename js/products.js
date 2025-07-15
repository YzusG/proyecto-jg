export const products = async () => {
  try {
    const response = await fetch("./products.json");
    const products = await response.json();

    const productosContainer = document.createElement("section");
    productosContainer.setAttribute("id", "products");
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.setAttribute("class", "product-card");
      const div = document.createElement("div");
      div.setAttribute("id", `${product.id}`);
      const p = document.createElement("p");
      p.innerHTML = `
        ${product.title}
      `;
      productCard.appendChild(div);
      productCard.appendChild(p);
      productosContainer.appendChild(productCard);
      document.body.appendChild(productosContainer);
    });
  } catch (error) {
    console.error("Hubo un error al cargar o mostrar los productos:", error);
    const productosContainer = document.getElementById("products");
    productosContainer.innerHTML =
      "<p>Lo sentimos, no pudimos cargar los productos en este momento.</p>";
  }
};
