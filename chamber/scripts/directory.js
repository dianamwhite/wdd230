const url = 'https://dianamwhite.github.io/wdd230/chamber/data.json';

//buttons//
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", function () {
        // example using arrow function
        display.classList.add("grid");
        display.classList.remove("list");
    })

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

//business cards//

async function getdirectorydata(url) {
    const response = await fetch (url);
    const data = await response.json();
    //console.table(data.directory);
    displaydirectory(data.directory);
    
}
getdirectorydata(url);

const displaydirectory = (directory) => {
    const cards = document.querySelector('div.cards');

    directory.forEach ((directory) => {

        let card = document.createElement ('section');
        let h3 = document.createElement ('h3');
        let address = document.createElement ('p');
        let phone = document.createElement ('p');
        let websiteurl = document.createElement ('a');
        let image = document.createElement ('img');
        let memb = document.createElement ('p');
        
// Build the h2 content out to show the business's full name - finish the template string
        h3.textContent = `${directory.name} `;
        address.textContent = `${directory.address}`;
        phone.textContent = `${directory.phone}`;
        websiteurl.textContent = `${directory.websiteurl}`;
        memb.textContent = `${directory.membership}`;

        image.setAttribute ('src', directory.imageurl);
        image.setAttribute ('alt', 'Company ${directory.name}');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        h3.setAttribute('class', 'h3');
        address.setAttribute('class', 'address');
        phone.setAttribute('class', 'phone');
        websiteurl.setAttribute('href', 'websiteurl')
        memb.setAttribute('class', 'memb');



        card.appendChild(image);
        card.appendChild(h3);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(memb);
        card.appendChild(websiteurl);

        cards.appendChild(card);

    });
}