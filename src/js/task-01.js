const items = document.querySelectorAll(".item");
const itemsQty = items.length;
console.log(`Number of categories: ${itemsQty}`);
items.forEach((element) => {
  let elementTitle = element.querySelector("h2").textContent;
  let titleElements = element.querySelectorAll("li");
  let titleElemntsQty = titleElements.length;
  console.log(elementTitle);
  console.log(titleElemntsQty);
});

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
