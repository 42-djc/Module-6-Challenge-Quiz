// Starter time
let timer = 60;

// add time to timer div
document.getElementById("time").innerHTML = timer;

// countdown 

setInterval (function(){
    timer-- 
    document.getElementById("time").innerHTML = timer;
},1000);