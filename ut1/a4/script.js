var questions = [
  "The Great Wall of China is visible from space.",
  "The currency of Japan is the Yuan.",
  "The Sahara Desert is the largest desert in the world.",
  "The Eiffel Tower is taller in the summer due to thermal expansion.",
  "Mount Everest is the highest mountain above sea level.",
  "The Amazon River is the longest river in the world.",
  "Vincent van Gogh cut off his own ear.",
];

// Function to generate the HTML dynamically
function generateQuestions() {
  var questionsContainer = document.getElementById("questions-container");

  for (var i = 0; i < questions.length; i++) {
    var questionElement = document.createElement("div");
    questionElement.innerHTML = `
            <br>
            <p class="question">${i + 1}. ${questions[i]}</p>
            <button type="button" onclick="checkAnswer(${i}, true)">True</button>
            <button type="button" onclick="checkAnswer(${i}, false)">False</button>
        `;
    questionsContainer.appendChild(questionElement);
  }
}

// Call the function to generate questions when the page loads
window.onload = generateQuestions;

function checkAnswer(index, answer) {
  var questionElement = document.getElementsByClassName("question")[index];

  if (answer === getCorrectAnswer(index)) {
    questionElement.style.color = "green";
  } else {
    questionElement.style.color = "red";
  }
}

function getCorrectAnswer(index) {
  // Define the correct answers for each question
  var correctAnswers = [false, false, true, true, true, false, true];

  return correctAnswers[index];
}
