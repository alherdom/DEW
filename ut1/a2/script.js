function diAlgo()
    {
    alert("Esta todo bien");
    }

function checkAnswer(answer, id) {
    var question = document.getElementById(id);
    if (answer) {
        question.style.color = 'green';
    } else {
        question.style.color = 'red';
    }

    }