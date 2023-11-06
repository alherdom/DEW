function randomArray(length = 15, min = -10, max = 20) {
    const numbers = Array.from({ length }, () => (Math.floor(Math.random() * (max - min)) + min))
    console.log(numbers)
    document.getElementById('array-numbers').innerHTML = numbers.join(', ');
}