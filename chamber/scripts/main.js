//current date and dates to use//
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);


document.querySelector(".date").innerHTML = fullDate;

//hamburguer Btn//
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hambButton").classList.toggle("open");

}
 const x = document.getElementById("hambButton");
 x.onclick = toggleMenu;

 //last updated//

 let year = new Date();
document.querySelector('#year').textContent = year.getFullYear();

let newdt = document.lastModified;
    document.getElementById('lastupdated').innerHTML = newdt;

/*banner*/
    const days= now.getDay;
   //apppears//
    if (days.getDay() == 1 || days.getDay() == 2) {  
        document.getElementById("banner").innerText = block;
    }
    else{
        document.getElementById("banner").innerText = none;
    }
    
