"use strict";

let shopByTypeSelect = document.querySelector("#shopByTypeSelect");
let categorySelect = document.querySelector("#categorySelect");
async function getCategories() {
  try {
    let url = "http://localhost:8081/api/categories";
    let response = await fetch(url);
    let categories = await response.json();
    console.log("categories", categories);
    return categories;
  } catch (error) {
    console.log("error:", error.message);
  }
}

function populateCategorySelect(categories) {
  categories.forEach((category) => {
    let option = document.createElement("option");
    option.value = category.categoryId;
    option.innerText = category.name;
    categorySelect.appendChild(option);
  });
}
async function selectCategory() {
  let byCategoryId = categorySelect.value;
  console.log(byCategoryId);
  
  let filteredProducts = products.filter(
    (product) => product.categoryId == byCategoryId
  );
  populateProductCards(filteredProducts);
}

async function startupPage() {
  let categories = await getCategories();
  populateCategorySelect(categories);
  let products = await getProducts();
  populateProductCards(products);
}
startupPage();
