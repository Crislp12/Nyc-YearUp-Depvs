async function populateProductSelect() {
  try {
    // Fetch
    const response = await fetch("http://localhost:8081/api/products");
    const products = await response.json();

    // Get the select element for categories
    const selectElement = document.getElementById('categorySelect');
    const productCardsContainer = document.getElementById('productCards');

    // Add change event listener
    selectElement.addEventListener('change', function(event) {
      productCardsContainer.innerHTML = ''; // Clear existing cards
      if (event.target.value === "") {
        // "View All" was selected
        console.log("Showing all products");
<<<<<<< HEAD
        //  showing showing all products
=======
        products.forEach(product => {
          const card = createProductCard(product);
          productCardsContainer.appendChild(card);
        });
>>>>>>> 254913fdde79047cab4eacdd013c6d1c9b09f8f2
      } else {
        // A specific product was selected
        const selectedProductId = event.target.value;
        console.log("Selected product ID:", selectedProductId);
        const selectedProduct = products.find(p => p.productId == selectedProductId);
        const card = createProductCard(selectedProduct);
        productCardsContainer.appendChild(card);
      }
    });

  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// calling the function when the page loads
document.addEventListener("DOMContentLoaded", populateProductSelect);

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
  productsList.appendChild(cardContainer);
}

