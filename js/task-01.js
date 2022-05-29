const numberOfEl = document.querySelectorAll(".item");

console.log("Number of categories:", numberOfEl.length);

for (const li of numberOfEl) {
  const liTitle = li.querySelector("h2");
  console.log("Category:", liTitle.textContent);
  const numberOfLiEl = li.querySelectorAll("li");
  console.log("Elements:", numberOfLiEl.length);
}
