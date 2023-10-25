view_time = document.getElementById("result")
let start_time = 0;
let chrono;

function startChrono() {
    var time = start_time;
    time += 1;
    view_time.value = current_time
}

current_time = setInterval(startChrono, 1)
view_time = document.getElementById("result")
view_time.innerHTML = current_time
console.log(current_time)
