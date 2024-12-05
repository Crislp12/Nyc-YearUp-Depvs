document.addEventListener("DOMContentLoaded", async function() {
  try {
    // Change the URL to fetch products instead of categories
    const response = await fetch("http://localhost:8081/api/products");
    const products = await response.json();
    console.log("Fetched products:", products);

    const selectElement = document.getElementById("categorySelect");
    const cardContainer = document.getElementById("card-conatiner-id");

    // Show all products 
    products.forEach((product) => {

      const card = createProductCard(product);
      cardContainer.appendChild(card);

    }
  );

    selectElement.addEventListener("change", function (event) {
      cardContainer.innerHTML = ""; // Clear existing cards
      const selectedCategoryId = event.target.value;
      
      if (selectedCategoryId === "") {
        // Show all products when "Select..." is chosen
        products.forEach((product) => {
          const card = createProductCard(product);
          cardContainer.appendChild(card);
        });
      } else {
        // Show products filtered by category
        const filteredProducts = products.filter(
          (product) => product.categoryId === selectedCategoryId
        );
        filteredProducts.forEach((product) => {
          const card = createProductCard(product);
          cardContainer.appendChild(card);
        });
      }
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

// Cards start here...
function createProductCard(product) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card";
  cardContainer.style.width = "18rem";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h6");
  cardTitle.className = "card-title";
  cardTitle.textContent = product.productName;

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
  cardSubtitle.textContent = "$" + product.unitPrice.toFixed(2);

  const cardText = document.createElement("p");
  cardText.className = "card-text text-body-secondary";
  cardText.textContent = product.supplier;
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardContainer.appendChild(cardBody);
  return cardContainer;
}