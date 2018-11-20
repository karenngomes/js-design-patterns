let elements = document.querySelectorAll(".cat-image");
let arrayCatNames = ["Ryan", "Chewie"];
let elemCatName = document.querySelectorAll(".catName");
for (var i = 0; i < arrayCatNames.length; i++) {
  elemCatName[i].textContent = arrayCatNames[i];
}
let count = 0;
for (let elem of elements) {
  elem.addEventListener("click", () => {
    count++;
    countElem = document.getElementById("count");
    countElem.textContent = Number(count);
  });
}
