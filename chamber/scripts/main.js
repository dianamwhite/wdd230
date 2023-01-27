function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hambButton").classList.toggle("open");

}
 const x = document.getElementById("hambButton");
 x.onclick = toggleMenu;

 //current date//
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
 document.querySelector(".date").innerHTML = fullDate;

 //last updated//

 let year = new Date();
document.querySelector('#year').textContent = year.getFullYear();

let newdt = document.lastModified;
    document.getElementById('lastupdated').innerHTML = newdt;