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
        const pedido = document.querySelector('.submitBtn');
        pedido.addEventListener("click", () => {   

            let Name = document.createElement('p');
            let phone = document.createElement('p');
            let email = document.createElement('p');
         
            const nombre = document.querySelector("#name").value;
            const tel = document.querySelector("#phone").value;
            const mail = document.querySelector("#email").value;
            console.log(nombre);
            console.log(tel);
            console.log(mail);
            /*const fruit1 = document.querySelector("freshOptions1").value;
            const fruit2 = document.querySelector("freshOptions2").value;
            const fruit3 = document.querySelector("freshOptions3").value;
            const instructions = document.querySelector("#InputMessage").value;*/
         
            Name.innerHTML = nombre;
            phone.innerHTML = tel;
            email.innerHTML= mail;
            console.log(Name);
            console.log(phone);
            console.log(email);
         
            let showorder = document.querySelector(".submision");
            showorder.append(Name);
            showorder.append(phone);
            showorder.append(email);
        }) 
}




   

    





