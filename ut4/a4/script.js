function randomArray(length = 20, min = 20, max = 100) {
    const numbers = Array.from({ length }, () => (Math.floor(Math.random() * (max - min)) + min))
    console.log(numbers)
    document.getElementById('array-numbers').innerHTML = numbers.sort(function (a, b) { return Math.random() }).join(', ');
}