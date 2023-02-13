    const temperature =  document.querySelector(".temp").innerHTML;
    const windspeed =  document.querySelector(".speed").innerHTML;
    console.log(temperature)
    console.log(windspeed)
  
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
    
