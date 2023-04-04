const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
//select droplist

const select1 = document.querySelector("#freshOptions1");
const select2 = document.querySelector("#freshOptions2");
const select3 = document.querySelector("#freshOptions3");


async function getFruitData(url){
    const response = await fetch (url);
    const data = await response.json();
    console.log(response);
    return data;
    
}
getFruitData();

async function displayfruit(){
    const fruit = await getFruitData;
   
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