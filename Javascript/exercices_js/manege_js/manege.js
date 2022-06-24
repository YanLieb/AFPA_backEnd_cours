let tourManege = document.getElementById('tourManege');
let tourManege2 = document.getElementById('tourManege2');

// Premiere partie
for (tour = 1; tour <= 10; tour++) {
    tourManege.innerHTML += '<li>' + `Tour de manège number ${tour}! ` + '</li>';
}

// Deuxième partie
function tourUser() {
let userSelect = document.getElementById('userSelect').value;

    if (userSelect > 0 && userSelect <= 10)  {
        for (let tour2 = 1; tour2 <= userSelect; tour2++) {
        tourManege2.innerHTML += '<li>' + `Tour de manège number ${tour2}! ` + '</li>';
        }
    } else {
        alert('Pas plus de 10 tours! Et au moins 1!');
    }
}

function effacer() {
window.location.reload();
}