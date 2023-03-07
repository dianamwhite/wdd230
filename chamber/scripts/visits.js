//local storage and stamp//

const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const dayssinceOutput = document.querySelector("#dayssince");

 // get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); 


// determine/display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment in the number of visits.
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date demonstration
//todayDisplay.textContent = Date.now();
//84600000 equals the number of miliseconds in one day.

// Days since last visit
let today = new Date("0");
let Vissince = new Date(today.getFullYear());


let dayssince = (Vissince.getTime() - Date.now()) / 84600000;

dayssinceOutput.innerHTML = `${dayssince.toFixed(0)} days`;


// Days since last time visit
//let today = new Date();
//let sincelastvisit = today.toLocaleDateString();

//document.getElementById('entredias').innerHTML = sincelastvisit;









