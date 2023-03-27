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
 const ingredientList = ingredients.map((ingredient) => {
    const newIngredient = document.createElement("li");
    newIngredient.textContent = ingredient;
    newIngredient.classList.add("item");
    return newIngredient;
  });
  // Добавляем новый <li> element в <ul> 
    ingredientsList.append(...ingredientList);

 