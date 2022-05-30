const numberOfEl = document.querySelectorAll(".item");

console.log("Number of categories:", numberOfEl.length);

// const categories = document.querySelector("#categories");
// console.log(`Number of categories: ${categories.children.length}`);

// const itemEl = document.querySelectorAll(".item");
// itemEl.forEach((el) => {
//   const itemTitelEl = el.querySelector("h2");
//   const itemListElements = el.querySelector("ul");
//   console.log(`Category: ${itemTitelEl.textContent}`);
//   console.dir(`Elements: ${itemListElements.children.length}`);
// });

// Використовую перебираючий метод масиву!

numberOfEl.forEach((element) => {
  const liTitle = element.querySelector("h2");
  console.log("Category:", liTitle.textContent);
  const numberOfLiEl = element.querySelectorAll("li");
  console.log("Elements:", numberOfLiEl.length);
});
