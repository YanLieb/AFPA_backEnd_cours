
function heureSuivante() {

    let heure = document.getElementById('heure').value,
        minute = document.getElementById('minute').value,
        seconde = document.getElementById('seconde').value;
    
    document.getElementById('result').innerHTML = `<code>${heure}h${minute}m${seconde}s</code>`;

    if (heure == 23 && minute == 59 && seconde == 59) {
        heure = document.getElementById('heure').getAttribute('aria-valuemin');
        minute = document.getElementById('minute').getAttribute('aria-valuemin');
        seconde = document.getElementById('seconde').getAttribute('aria-valuemin');
        document.getElementById('plusOne').innerHTML = `<code>${heure}h${minute}m${seconde}s</code>`;
    }
    else if (minute == 59 && seconde == 59) {
        heure++;
        minute = document.getElementById('minute').getAttribute('aria-valuemin');
        seconde = document.getElementById('seconde').getAttribute('aria-valuemin');
        document.getElementById('plusOne').innerHTML = `<code>${heure}h${minute}m${seconde}s</code>`;
    }
    else if (seconde == 59) {
        minute++;
        seconde = document.getElementById('seconde').getAttribute('aria-valuemin');
        document.getElementById('plusOne').innerHTML = `<code>${heure}h${minute}m${seconde}s</code>`;
    }  
    else if ((!heure == true) || (!minute == true) || (!seconde == true)) {
        document.getElementById('result').innerHTML = '';
        document.getElementById('plusOne').innerHTML = '';
        alert('Entrées vides ou non valides!');

    }
    else if ((heure >= 24 || heure <= 00) || (minute >= 60 || minute <= 00) || (seconde >= 60 || seconde <= 00)) {
        document.getElementById('result').innerHTML = '';
        document.getElementById('plusOne').innerHTML = '';
        alert('Veuillez saisir une heure réelle!');
    }
    else {
        seconde++;
        document.getElementById('plusOne').innerHTML = `<code>${heure}h${minute}m${seconde}s</code>`;
    }
}