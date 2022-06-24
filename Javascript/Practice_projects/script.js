

// window.addEventListener("keypress", function (event) {
//     result.innerHTML += event.key;
// })

window.addEventListener("click", function (e) {
    let result = document.getElementById('result');
    let button = e.target.innerText;

    if (button == 'c') {
        result.innerHTML = '';
    } else if (button == "x") {
        button = '*';
        result.innerHTML += button;
    } else if (button == "=") {
        result.innerHTML = eval(result);

    } else {
        result.innerHTML += button;
    }
})