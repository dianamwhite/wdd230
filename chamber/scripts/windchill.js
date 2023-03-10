    const temperature =  document.querySelector(".temp");
    const windspeed =  document.querySelector(".speed");
    //console.log(temperature)
    //console.log(windspeed)

    //API weather
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=vicenza&appid=95a11ada0b08440be950d9edc1b88383&units=metric`;


    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {
    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    //description of current weather
    const desc = weatherData.weather[0].description;
  
    //img attribute for the icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    //displays speed
    windspeed.textContent=weatherData.wind.speed;

    

  };


/* Computes and returnes the value of  
35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
*/

    if (temperature <= 50 && windspeed > 3){
    Wchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow (windspeed, 0.16)) + ((0.4275 * temperature) * Math.pow(windspeed, 0.16)); 
        console.log(Wchill)
    Wchil= Math.round(Wchill)
    let result = Wchill.toFixed(0)

    document.getElementById('chill').innerText = result;
}
    else{
        document.getElementById('chill').innerText = "N/A";
}
    
