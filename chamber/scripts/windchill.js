    const temperature =  document.getElementById(".temp");
    const windspead =  document.getElementById(".wind");
    
    var t= parseInt(temperature.textContent);
    var s= parseInt (windspead.textContent);
  
/* Computes and returnes the value of  
35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
*/

    if (t <= 50 && s > 3){
    Wchill = 35.74 + (0.6215 * t) - (35.75 * Math.pow (s, 0.16)) + ((0.4275 * t) * Math.pow(s, 0.16)); 

    Wchil= Math.round(Wchill)
    let p = Wchill.toString()
    let p2 = "F";
    let result = p.concat(p2); /* concat une los elementos para que esten en la misma fila */

    document.getElementById('chill').innerText = result;
}
    else{
        document.getElementById('chill').innerText = N/A;
}
    
