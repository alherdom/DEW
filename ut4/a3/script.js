function randomArray(length = 20, min = 20, max = 100) {
    let numbers = Array.from({ length }, () => (Math.floor(Math.random() * (max - min)) + min))
    console.log(numbers)
    numbers = numbers.sort(function (a, b) { return a - b }).join(', ')
    document.getElementById('array-numbers').innerHTML = shuffle(numbers)
}