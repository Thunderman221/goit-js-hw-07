const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.getElementsByClassName("item");

console.log(`Number of categories: ${categoryItems.length}`);

Array.from(categoryItems).forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const categoryElements = item.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
