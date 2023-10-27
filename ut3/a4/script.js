function numberGenerate(min, max) {
    var number = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(number)   
    document.getElementById('number').innerHTML = number;
    
    if (number <= 5) {
        newPage = window.open("https://www.google.com/", "sub", "height=600,width=600");
    }
    // else {
    //     alert
    // }
}