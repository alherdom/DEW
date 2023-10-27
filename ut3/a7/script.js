// Initialize time to 0
let time = 0;
// Declare the "interval" variable to used later on
let interval;
// Get the respective buttons from the HTML and declare them as const
// Used later in enabled or disabled these buttons
const setDate = document.getElementById("date").value
const setTime = document.getElementById("hour")
const countdownElement = document.getElementById("countdown");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const restartButton = document.getElementById("restart");
const currentDateTime = new Date()
const dateSet = new Date(setDate)


function getDate() {
    let millisecondsNow = Date.now(currentDateTime)
    let millisecondsDate = dateSet.getTime()
    console.log(millisecondsNow)
    console.log(millisecondsDate)
    let remainingTime = (millisecondsDate - millisecondsNow)
    console.log(remainingTime)

    const seconds = remainingTime / 1000
    const minutes = seconds / 60
    seconds = seconds + (seconds % 60)
    const hours = minutes / 60
    const days = hours / 24
    minutes = minutes + (minutes % 60) 
    
}


// Use a function to update the chrono display, and "f-string"
function updateCountdown() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    chronoElement.textContent = `${String(hours).padStart(2, '0')}/${String(hours).padStart(2, '0')}/${String(minutes).padStart(2, '0')}/${String(seconds).padStart(2, '0')}`;
}
// When press the start button call the updateChrono function on the interval of 1000 (1s)
// And disabled startButton and enabled the stopButton
function startChrono() {
    interval = setInterval(updateChrono, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}
// When press the stop button used "clearInterval()" to stop the chrono, stop calls function
// And enabled startButton and disabled the stopButton
function stopChrono() {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
}
// When press the restart button, again stop the interval calls but now we reinitialize the time to 0
// // And enabled startButton and disabled the stopButton
function restartChrono() {
    clearInterval(interval);
    time = 0
    chronoElement.textContent = '00:00:00';
    startButton.disabled = false;
    stopButton.disabled = true;
}