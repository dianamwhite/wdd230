//current date and dates to use EU// Bountiful Foods JS//

const year = new Date()
document.querySelector('#year').textContent = year.getFullYear();

const newdate = document.lastModified;
    document.getElementById('lastupdated').innerHTML = newdate;

//hamburguer Btn//

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hambButton").classList.toggle("open");

}
 const x = document.getElementById("hambButton");
 x.onclick = toggleMenu;