//current date and dates to use//
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
const day= now.getDate();

 document.querySelector(".date").innerHTML = fullDate;

//banner//

    if (d.getDay() == 1) || (d.getDay() == 2) {
    const banner= document.querySelector ('.banner');

    //text banner//
    banner.textContent= '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'; 

    //style banner//
    banner.style.backgroundColor = '#F4E8C1';
    banner.style.color = '#3D3A30';
    banner.style.textAlign = 'center';
}

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

