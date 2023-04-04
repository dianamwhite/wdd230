const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
//select droplist

const select1 = document.querySelector("#freshOptions1");
const select2 = document.querySelector("#freshOptions2");
const select3 = document.querySelector("#freshOptions3");


async function getFruitData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayfruit(data);
    
}
getFruitData(url);

async function displayfruit(data){
    console.log(data);              //loop, por cada seleccion la data se mostrara
    data.forEach(fruit => {
    
        let option1 = document.createElement("option");     //displays the options fruits
        let option2 = document.createElement("option");
        let option3 = document.createElement("option");
        option1.innerHTML = fruit.name;
        option2.innerHTML = fruit.name;
        option3.innerHTML = fruit.name;
        select1.appendChild(option1);
        select2.appendChild(option2);
        select3.appendChild(option3);
    
 });
}

