//*las updated*//
let year = new Date();
document.querySelector('#year').textContent = year.getFullYear();

let newdt = document.lastModified;
    document.getElementById('lastupdated').innerHTML = newdt;

//*getting elements*//
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//* Click event listener for the Add Chapter button using addEventListener and an anonymous function. *//

button.addEventListener('click', () => {    //  =>  means function () //
    if (input.value !== ''){
    const chapter = input.value;
    input.value = '';

const listItem = document.createElement('li');
const listText = document.createElement('span');
const deleteBtn = document.createElement('button');

    listText.textContent = chapter;
    listItem.appendChild(listText);

    deleteBtn.addEventListener('click', () => {
    list.removeChild(listItem);
});

    deleteBtn.textContent = '❌';
    listItem.appendChild(deleteBtn);

    list.appendChild(listItem);

    input.focus();
    }
});

