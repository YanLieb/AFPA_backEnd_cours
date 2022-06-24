
let prenom = prompt('What is your prénom?');
let nom = prompt('What is your nom of famille?');
let resultat = alert('Salut bonjour, ' + prenom + ' ' + nom + ', et bienvenue!');

document.getElementById('reponse').innerHTML = 'Nous savons désormais qui tu es, ' + prenom + ' ' + nom + '.';