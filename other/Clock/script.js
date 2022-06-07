

var displayS = document.getElementsByClassName("seconds");
var displayM = document.getElementsByClassName("minutes");
var displayH = document.getElementsByClassName("hours");

console.log(displayS[0])

setInterval(function(){
    var date = new Date();
    var secs = date.getSeconds();
    var mins = date.getMinutes();
    var hours = date.getHours();

    if(hours >= 12){
        hours = hours - 12;
    }
    if(mins < 10){
        mins = "0" + mins;
    }
    if(secs < 10){
        secs = "0" + secs;
    }

    displayS[0].innerHTML = secs;
    displayM[0].innerHTML = mins;
    displayH[0].innerHTML = hours;
    if(hours == 4 && mins == 20){

    }
}, 1000)
