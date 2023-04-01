const temperatura = document.querySelector('#temperature');
const descripcion = document.querySelector('#description');
const humedad = document.querySelector('#humidity');
console.log(temperatura)
console.log(descripcion)
console.log(humedad)

async function apiFetch(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=43769af0eeae93d592ac47faaefbc782&units=imperial`;

        try{
            const response = await fetch(url);
            if (response.ok){
                const data = await response.json();
                displayResults(data);
            }else{
                throw Error (await response.text());
            }
            }catch(error){
                console.log(error);
            }
        }

        apiFetch();


    function displayResults (weatherData){
        temperatura.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
        descripcion.textContent= `${weatherData.weather[0].description}`;
        humedad.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;

    //icon weather description
       const weatherIcon = document.querySelector('#weather-icon');

        const desc = weatherData.weather[0].description;

        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;
    };