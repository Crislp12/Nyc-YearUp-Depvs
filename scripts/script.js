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
