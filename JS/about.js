const orderedList = document.getElementById('numbers');

const initialValue = 1;
const stopValue = 12;

for (let i = initialValue; i <= stopValue; i = i + 1) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    orderedList.appendChild(listItem);
}