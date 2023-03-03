const url = 'https://dianamwhite.github.io/wdd230/chamber/data.json';

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
        let websiteurl = document.createElement ('p');
        let image = document.createElement ('img');
        let memb = document.createElement ('p');
        
// Build the h2 content out to show the business's full name - finish the template string
        h3.textContent = `${directory.name} `;
        address.textContent = `${directory.address}`;
        phone.textContent = `${directory.phone}`;
        websiteurl.textContent = `${directory.websiteurl}`;
        memb.textContent = `${directory.membership}`;

        image.setAttribute ('src', directory.img);
        image.setAttribute ('alt', 'Portrait of ${client.name} ${client.lastname}');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');


        card.appendChild(h3);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(websiteurl);
        card.appendChild(image);

        cards.appendChild(card);

    });
}