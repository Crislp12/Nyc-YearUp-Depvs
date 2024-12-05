async function populateProductSelect() {
  try {
    // Fetch 
    const response = await fetch("http://localhost:8081/api/products");
    const products = await response.json();

    // select elements
    const selectElement = document.getElementById("shopByTypeSelect");

    // Addding products
    for (let i = 0; i < products.length; i++) {
      const option = document.createElement("option");
      option.value = products[i].productId;
      option.textContent = `${products[i].productName} (${products[i].categoryName})`;
      selectElement.appendChild(option);
    }

    selectElement.addEventListener("change", function (event) {
      if (event.target.value === "") {
        // "View All" was selected
        console.log("Showing all products");
        // now showing showing all products
      } else {
        // A specific product was selected
        const selectedProductId = event.target.value;
        console.log("Selected product ID:", selectedProductId);
        // showing specific product displaying
      }
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// this right here calls the function when the page loads
document.addEventListener("DOMContentLoaded", populateProductSelect);

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
  products.appendChild(cardContainer)
}
