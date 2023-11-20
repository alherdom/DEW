let countdownInterval;
let targetDate;

function getDate() {
  const selectedDate = document.getElementById("date").value;

  // Check if a date is selected
  if (selectedDate) {
    targetDate = new Date(selectedDate).getTime();
    updateCountdown();
  } else {
    alert("Please select a valid date.");
  }
}

function updateCountdown() {
  if (targetDate) {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = `${days}/${hours}/${minutes}/${seconds}`;
  }
}

function startChrono() {
  if (targetDate) {
    countdownInterval = setInterval(updateCountdown, 1000);
  } else {
    alert("Please select a valid date before starting the countdown.");
  }
}

function stopChrono() {
  clearInterval(countdownInterval);
}

function restartChrono() {
  clearInterval(countdownInterval);
  targetDate = null; // Reset the target date
  document.getElementById("countdown").textContent = "00/00/00/00"; // Reset the countdown display
}
