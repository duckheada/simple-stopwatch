// ---Vars---
// Time count
let sec = 0;
let min = 0;
let hr = 0;
//Time display
let displaySec = 0;
let displayMin = 0;
let displayHr = 0;
// Stop/reset
let interval = null;
let status = "stopped";

//---Functions
// Timer 
function stopWatch(){

  sec++;
  if(sec === 60){
    sec = 0;
    min++
    if(min === 60){
    min = 0;
    hr++
    }
  }
  if (sec <10){
    displaySec = `0${sec}`
  } else{
    displaySec = sec;
  }
  if (min <10){
    displayMin = `0${min}`
  } else{
    displayMin = min;
  }
  if (hr <10){
    displayHr = `0${hr}`
  } else{
    displayHr = hr;
  }
  document.getElementById("timer").innerHTML= `${displayHr}:${displayMin}:${displaySec}`;
  
}

// Start/stop button
function startStopButton() {

  if (status === "stopped"){
    interval = setInterval(stopWatch, 1000);
    document.getElementById("startstop").innerHTML = "Stop"
    status = "started"
  } 
  else {
    interval = clearInterval(interval)
    document.getElementById("startstop").innerHTML = "Start"
    status = "stopped"
  }

}

// Lap function
function lapsButton() {

    const lapListTag = document.createElement("LI");
    lapListTag.innerHTML = timer.textContent
    document.getElementById("lapsesLi").appendChild(lapListTag)

}

// Reset button
function resetButton(){

    window.clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    timer.textContent  = "00:00:00";
    document.getElementById("startstop").innerHTML = "Start";
    const ul = document.getElementById('lapsesLi')
    let child = ul.lastElementChild;  
    while (child) { 
        ul.removeChild(child); 
        child = ul.lastElementChild; 
    } 
}


//reset button resets lapses but wont let the counter start again withought refreshing page

