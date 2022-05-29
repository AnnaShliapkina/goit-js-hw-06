const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// for (let ingredient of ingredients) {
//   const ingredientListItem = document.createElement("li");
//   ingredientListItem.textContent = ingredient;
//   ingredientListItem.classList.add("item");
// }

const ingredientListItem = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  return ingredientItem;
});

const ingredientList = document.querySelector("#ingredients");
ingredientList.append(...ingredientListItem);
