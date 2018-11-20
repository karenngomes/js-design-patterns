let element = document.getElementById('cat-image');
let count = 0;
element.addEventListener('click', () => {
    count++;
    countElem = document.getElementById('count');
    countElem.textContent = Number(count);
});