const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//Достаем каждый елемент массива по id
const ingredientsList = document.getElementById("ingredients");

// Создаем каждый новый <li> element с text content и добавляем item class
ingredients.forEach((ingredient) => {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  newIngredient.classList.add("item");
  
  // Добавляем новый <li> element в <ul> 
  ingredientsList.appendChild(newIngredient);
});