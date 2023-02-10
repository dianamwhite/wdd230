
    const temperature =  document.getElementById(".temp");
    const windspead =  document.getElementById(".wind");
    
    var t= parseInt(temperature.textContent);
    var s= parseInt (windspead.textContent);
  
/* Computes and returnes the value of  
35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
*/

    function calwchil(){
    Wchill = 35.74 + (0.6215 * t) - (35.75 * Math.pow (s, 0.16)) + ((0.4275 * t) * Math.pow(s, 0.16)); 
    }
    function x(){
    if (t <= 50 && s > 3){
    calwchil;
    }
    else{
        result='N/A';
}
    }
