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
        products.forEach(product => {
          const card = createProductCard(product);
          productCardsContainer.appendChild(card);
        });
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

// this right here calls the function when the page loads
document.addEventListener("DOMContentLoaded", populateProductSelect);

