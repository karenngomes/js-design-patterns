let elements = document.querySelectorAll(".cat-image");
let arrayCat = [
  {
    name: 'Ryan',
    pic: 'cat.jpg',
  },
  {
    name: 'Chewie',
    pic: 'cat-2.jpg',
  },
  {
    name: 'Pingo',
    pic: 'cat-3.jpg',
  },
  {
    name: 'Lilo',
    pic: 'cat.jpg',
  },
  {
    name: 'Tintin',
    pic: 'cat-2.jpg',
  },
]
let elemCatList = document.querySelector(".catList");
for (var i = 0; i < arrayCat.length; i++) {
  let elem = document.createElement('li');
  elem.setAttribute('class', 'cat');
  elem.setAttribute('id', arrayCat[i].name);
  console.log(elem);
  elem.textContent = arrayCat[i].name;
  elemCatList.appendChild(elem);
}
