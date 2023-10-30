function randomArray(length = 10, min = 100, max = 200) {
    const numbers = Array.from({ length }, () => (Math.floor(Math.random() * (max - min)) + min))
    console.log(numbers)
    document.getElementById('array-numbers').innerHTML = numbers.join(', ');
}