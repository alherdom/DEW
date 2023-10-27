// Initialize time to 0
let time = 0;
// Declare the "interval" variable to used later on
let interval;
// Get the respective buttons from the HTML and declare them as const
// Used later in enabled or disabled these buttons
const chronoElement = document.getElementById("chrono");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const restartButton = document.getElementById("restart");
// Use a function to update the chrono display, and "f-string"
function updateChrono() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    chronoElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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