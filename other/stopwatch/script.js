var theActualTimeThatIWantOnTheSite = document.getElementsByClassName("time");

var buttonStart = document.getElementById("buttonStart");
var buttonStop = document.getElementById("buttonStop");
var buttonRestart = document.getElementById("buttonRestart");

var timeInSecs = 0;
var counting = false;


setInterval(function (){
    if(counting == true)
    {
        var temp;
        timeInSecs++;
        //console.log(timeInSecs);
        temp = new Date(timeInSecs * 100).toISOString()
        
        theActualTimeThatIWantOnTheSite[0].innerHTML = temp.slice(14, 22)
        //console.log(theActualTimeThatIWantOnTheSite);
    }

    
}, 100)

buttonStart.onclick = function() {
    counting = true;
}
buttonStop.onclick = function() {
    counting = false;
}

buttonRestart.onclick = function() {
    if(counting == false){
        timeInSecs = 0;
        theActualTimeThatIWantOnTheSite[0].innerHTML = "00:00.00"
    }
}