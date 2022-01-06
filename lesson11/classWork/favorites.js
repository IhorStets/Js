let favorites = JSON.parse(localStorage.getItem('favorites'));
console.log(favorites);
for (const favorite of favorites) {
    let divElement = document.createElement('div');
    divElement.innerText = JSON.stringify(favorite);
    document.body.appendChild(divElement);
}