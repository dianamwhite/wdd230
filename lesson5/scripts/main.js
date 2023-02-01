//*las updated*//
let year = new Date();
document.querySelector('#year').textContent = year.getFullYear();

let newdt = document.lastModified;
    document.getElementById('lastupdated').innerHTML = newdt;

//*getting elements*//
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//*Add Event Listener for Add Button*//

button.addEventListener('click', () => {
const chapter = input.value;
input.value = '';

const listItem = document.createElement('li');
const listText = document.createElement('span');
const deleteBtn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = chapter;
listItem.appendChild(deleteBtn);
list.appendChild(listItem);

deleteBtn.textContent = '❌';
deleteBtn.addEventListener('click', () => {
list.removeChild(listItem);
});

input.focus();
});