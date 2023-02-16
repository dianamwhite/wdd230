//current date and dates to use EU//
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
    const days= new Date();

   //apppears//
    if ((days.getDay() == 1) || (days.getDay() == 2)) {  
       let banner= document.getElementById("banner")
       banner.style.display = 'block';
    }
    else{
        let banner= document.getElementById("banner")
         banner.style.display = 'none';
    }


 //local storage and stamp//

const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

 // get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date demonstration