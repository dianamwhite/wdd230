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
    console.log(data);
    data.forEach(fruit => {
    
        let option1 = document.createElement("option");
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



/*select1.addEventListener("click", getFruitData, {
    display.classList.add("freshOptions1");
})

select2.addEventListener("click", getFruitData, {
    display.classList.add("freshOptions2");
})

select3.addEventListener("click", getFruitData,{
    display.classList.add("freshOptions3");
})*/