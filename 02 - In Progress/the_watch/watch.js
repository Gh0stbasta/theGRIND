const watchContainer = document.getElementById("watch");
const btnClock = document.getElementById("clock");
const btnStopWatch = document.getElementById("stop-watch");
const btnStartTime = document.getElementById("start-time");
const btnFreezeTime = document.getElementById("freeze-time");
const btnResetTime = document.getElementById("reset-time");
let clockTimer;
let stopWatchTimer;
let startTime;
let elapsedTime;

const getActualTime = () => {
  // clearing timers if existent
  clearInterval(stopWatchTimer);
  // pulling the time from the System
  let actualTime = new Date().toLocaleTimeString();
  // pushing it to UI
  watchContainer.innerHTML = actualTime;
  // creating a global variable using window and setting the id to "clockTimer"
  // then starting a timeout which refreshes every second
  clockTimer = setTimeout(getActualTime, 1000);
};

const setWatchToZero = () => {
  // set everything to zero
  clearInterval(clockTimer);
  clearInterval(stopWatchTimer);
  timeDifference = null;
  startTime = null;
  elapsedTime = null;

  watchContainer.innerHTML = "00:00:00";
};

const updateStopWatch = () => {
  // creating an actual time to calculate the difference to startTime
  elapsedTime = Date.now() - startTime;
  // calculate milliseconds taking the total time mod 1000 to get the rest
  // e.g. (37s and 365 ms) 37365 % 1000 = 365 this then divided by 10 is 36.5 but math floor rounds it down
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  // calculate seconds
  // e.g 37365 / 1000 = 37,365 mod 60 is 37,365 but floor rounds it down
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  // calculate minutes -> a minute is 60.000 miliseconds
  // e.g. 37365 / 60.000 = 0,62275 but math rounds it to 0
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  // complete string for time concatenating the values we already calculated
  let formattedTime =
    // formating with terniary operator (?) its the short form for if-else
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);

  watchContainer.innerHTML = formattedTime;
};

const startStopWatch = () => {
  // emptying the container for new content
  watchContainer.innerHTML = "";
  // clearing all running timers
  clearTimeout(clockTimer);
  // creating a startTime to calculate the elapsed Time
  // if the user hitted freeze-time before we have to handel the time
  // thats already on the stopwatch. We have to substract the already elapsed time
  // because only this way you get the right time with the updateStopWatch Function
  // when it calls the new systemtime
  if (elapsedTime) {
    startTime = Date.now() - elapsedTime;
    console.log(startTime);
    elapsedTime = null;
  } else {
    startTime = Date.now();
  }
  // starting the Interval in milliseconds
  stopWatchTimer = setInterval(() => updateStopWatch(), 1);
};

const freezeTime = () => {
  // stop all timers to freeze the time
  clearInterval(stopWatchTimer);
  clearInterval(clockTimer);
};

btnClock.addEventListener("click", getActualTime);
btnStopWatch.addEventListener("click", setWatchToZero);
btnStartTime.addEventListener("click", startStopWatch);
btnFreezeTime.addEventListener("click", freezeTime);
btnResetTime.addEventListener("click", setWatchToZero);
