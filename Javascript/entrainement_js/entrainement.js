// commentaire sur une ligne
/**
 * commentaire sur
 * plusieurs
 * lignes
 */

//Javascript est exécuté par le navigateur via une interface interne au navigateur.
//ECMAScript est un ensemble de normes concernant le langage JS.

// window est un outil JS qui représente une fenêtre du navigateur (onglet) contenant un document web.
// document est un outil js qui représente la page web chargé par le navigateur (notre script complet)

// Toute instruction doit finir par un ; ce caractère représente la fin de l'instruction (pratique non obligatoire avec JavaScript mais fortement recommandé)

// Les erreurs js sont visibles dans la console navigateur, dans l'onglet console de l'inspecteur.

// Le document nous permet d'aller chercher n'importe quel élément html de notre page pour le manipuler en JS

// document.getElementById('contenuChapitre1'); 
// permet d'aller chercher l'élément HTML ayant l'id contenuChapitre1

// document.getElementById('contenuChapitre1').TextContent = 'du texte';
// permet de modifier le contenu texte de l'élément

// document.getElementById('contenuChapitre1').innerHTML = '<p>du texte</p>';
// permet de modifier le contenu texte et HTML de l'élément


// **********
// Chapitre 1 : Affichage
// **********

// alert('Bonjour à tous'); affiche un message pour l'utilisateur.

// confirm('êtes-vous sûr?'); récupère une confirmation utilisateur (OK / annuler).

// prompt('Quel est votre prénom?'); récupère une saisie utilisateur.

console.log('Une info visible dans la console'); //affiche un message dans la console de l'inspecteur.

// Affichage dans le document web

// On passe par un sélecteur pour récupérer un élément HTML de notre page afin de le manipuler

document.getElementById('contenuChapitre1').textContent = 'Bonjour à tous';
// textContent n'interprète pas les balises HTML, il ajoute juste du texte à un élément

document.getElementById('contenuChapitre1').innerHTML += '<h3> Hello World! </h3>';
// le + avant = permet d'ajouter le contenu de innerHTML à la suite; sans le + le contenu de innerHTML écrase et remplace l'élément visé par getElementById
//innerHTML permet de gérer le contenu texte et/ou html de l'html interprété par le navigateur.

// **********
// Chapitre 2 : variables, déclaration et affectation
// **********

//Une variable est un espace nommé permettant de conserver une valeur. Une variable possède un type, on parle de type primitif ou pseudo-type.

// Caractères autorisés : les caractères alphanumériques, pas de caractères spéciaux. 
// Le javascript est sensible à la casse: une majuscule est interprété différemment d'une minuscule.
// Une variable ne peut pas commencer par un chiffre.

// *****
// Déclaration avec var
// *****

//Déclaration
var maBoite; //déclaration d'une variable nommée maBoite.

// Affectation
maBoite = 10; //affectation de la valeur 10 dans la variable ma Boite.

// Déclaration et affectation sur la même ligne
// On récupère l'élément HTML pour le placer dans une variable.
var elementChapitre2 = document.getElementById('contenuChapitre2');
console.log(elementChapitre2);

elementChapitre2.innerHTML = '<p> Une variable est un espace nommé permettant de conserver une valeur</p>';
elementChapitre2.innerHTML += '<p> Une valeur possède un type, on parle de pseudo-type, ou type primitif</p>';

// *****
// Déclaration avec let
// *****

let autreVariable = 'du texte';
console.log(autreVariable);

// différence entre var et let
// Une variable déclarée avec var est disponible dans tout le code, SAUF si elle est déclarée dans une fonction.
// une variable déclarée avec let n'existe que dans le bloc où elle a été déclarée. Un bloc est représenté par des accolades {}

{
let testLet = 'un test';
    console.log('valeur de la variable testLet dans le même bloc : ' + testLet);
}

// console.log('valeur de la variable testLet en dehors du block : ' + testLet); message d'erreur de la console parce que la vaariable est non définie en dehors du bloc.

// Avec let on ne peut pas redéclarer la même variable dans le même bloc.

var test1 = 123;
var test1 = 456;

let test2 = 'abc';
// let test2 = 'def'; Uncaught SyntaxError: redeclaration of let test2. note :Previously declared at line 104, column 4

test2 = 'def'; // ici ok car il s'agit d'une affectation, non d'une déclaration.

// **********
// Déclaration avec const
// **********

// même comportement que let sauf 2 points principaux : 
// avec const on doit affecter la valeur lors de la déclaration obligatoirement
// une variable déclarée avec const est CONSTANTE, donc on ne peut pas modifier sa valeur

const maConstante = 'une valeur';
// maConstante = 'deux valeurs'; Uncaught TypeError: invalid assignment to const 'maConstante'

// **********
// Type de données
// **********

// En JS on récupère des outils du langage selon leur type (type primitif = string, number, booleen, null, undefined, symbol) de la donnée qu'on récupère.
// typeof est un opérateur qui permet d'afficher le type de valeur.

let elementChapitre3 = document.getElementById('contenuChapitre3');

let chaine = 'du texte'; // une variable contenant du texte.

elementChapitre3.innerHTML = 'Le type contenu dans la variable nommée chaine est : ' + typeof chaine + '<br>';

let numerique = 123; // type number
elementChapitre3.innerHTML += 'Le type de contenu dans la variable nommée numérique est : ' + typeof numerique + '<br>';

let autreChaine = '123'; // type string
elementChapitre3.innerHTML += 'Le type de contenu dans la variable nommée autreChaine est : ' + typeof autreChaine + '<br>';
// '123' est de type string mais de valeur numérique.

let negatif = -5; // type number
elementChapitre3.innerHTML += 'Le type de contenu dans la variable nommée negatif est : ' + typeof negatif + '<br>';

let decimal = 1.23; // type number
elementChapitre3.innerHTML += 'Le type de contenu dans la variable nommée decimal est : ' + typeof decimal + '<br>';

let choix = true; // type boolean
elementChapitre3.innerHTML += 'Le type de contenu dans la variable nommée choix est : ' + typeof choix + '<br>';

elementChapitre3.innerHTML += 'Le type de contenu dans la variable nommée existePas est : ' + typeof existePas + '<br>';

// **********
// Chapitre 4 : Quotes
// **********

let elementChapitre4 = document.getElementById('contenuChapitre4');

// les quotes sont utilisées pour représenter des chaînes de caractères dans le code.

elementChapitre4.innerHTML = 'Hello avec des simple quotes<br>';
elementChapitre4.innerHTML += "Hello avec des double quotes, rien n'a changé<br>";
elementChapitre4.innerHTML += 'Il fait beau aujourd\'hui avec des simple quotes <br> ';
elementChapitre4.innerHTML += "Il fait beau aujourd'hui avec des double quotes<br>";

// Les backticks
let prenom = 'Marie';
elementChapitre4.innerHTML += `Bonjour ${prenom} <br>`;
// L'utilisation du gabarit ${} permet d'aller chercher la valeur de cette variable.

// **********
// Chapitre 5 : La concaténation
// **********

// La concaténation permet d'assembler des chaînes de caractères représentées notamment via du texte ou des variables.
// Le caractère de concaténation est le signe ' + ' que l'on peut traduire par 'à la suite de'.

let prenom2 = 'Pierre';
let nom2 = 'Dupont';

let elementChapitre5 = document.getElementById('contenuChapitre5');

elementChapitre5.innerHTML = 'Bonjour ' + prenom2 + ' ' + nom2 + '<br>';
elementChapitre5.innerHTML += `Bonjour ${prenom2} ${nom2}`;

// **********
// Chapitre 6 : opérateurs arithmétiques
// **********

let elementChapitre6 = document.getElementById('contenuChapitre6');

let result = 10 + 5;
elementChapitre6.innerHTML = result + '<br>';

result = 10 - 5;
elementChapitre6.innerHTML += result + '<br>';

result = 10 / 5;
elementChapitre6.innerHTML += result + '<br>';

result = 10 * 5;
elementChapitre6.innerHTML += result + '<br>';

result = 10 % 5;
elementChapitre6.innerHTML += result + '<br>'; // le reste de la division en terme d'entier. ex : 10%3 = 1.

result = 10 ** 5;
elementChapitre6.innerHTML += result + '<br>';


// **********
// Chapitre 7 : les conditions
// **********

let elementChapitre7 = document.getElementById('contenuChapitre7');

// Une condition permet de prévoir différents cas possibles.
// Une condition ne peut recevoir qu'une réponse du type vrai (true) ou faux (false).

let a = 10,
    b = 5,
    c = 2;

if(a > b) {
    elementChapitre7.innerHTML = `la valeur de a (${a}) est strictement supérieure à la valeur de b (${b})`
} else {
    elementChapitre7.innerHTML = `la valeur de a (${a}) n'est pas strictement supérieure à la valeur de b (${b})`
};

if (a > b && b > c) {
    elementChapitre7.innerHTML = `<p>OK pour les deux conditions</p>`
} else { `<p>Une des deux conditions ou les deux conditions sont fausses</p>` };

if (a > b || b > c) {
    elementChapitre7.innerHTML = `<p>OK pour au moins une des deux conditions</p>`
} else {
    `<p>les deux conditions sont fausses</p>`
};

// true / false

let test = true;
if (test) {
    elementChapitre7.innerHTML = 'on rentre dans le if <br>';
}

test = false;
if (!test) { //avec le ! (différent de), on attend la valeur false dans test pour rentrer dans le if.
    elementChapitre7.innerHTML = 'on rentre dans le if <br>';
}

if (test == false) { // on devrait plutôt écrire de cette manière.
     elementChapitre7.innerHTML = 'on rentre dans le if <br>';
}

let var1 = 1; // type number
let var2 = '1'; // type string

// comparaison des valeurs :
if (var1 == var2) {
    elementChapitre7.innerHTML += `<p>ver1 a la même valeur que var2</p>`;
} else {
    elementChapitre7.innerHTML += `<p>var1 et var2 ont des valeurs différentes</p>`;
}

// comparaison des valeurs et des types :
if (var1 === var2) {
    elementChapitre7.innerHTML += `<p>ver1 a la même valeur et le même type que var2</p>`;
} else {
    elementChapitre7.innerHTML += `<p>var1 et var2 ont des valeurs ou des types différents</p>`;
}

   /*
Les opérateurs de comparaison
-----------------------------
=       affectation (ce n'est pas une comparaison)
==      est égal à (comparaison des valeurs uniquement)
===     est strictement égal à (comparaison et des valeurs et des types)
!=      est différent de (comparaison uniquement des valeurs)
!==     est strictement différent de (comparaison et des valeurs et des types)
>       strictement supérieur
>=      supérieur ou égal
<       strictement inférieur
<=      inférieur ou égal 
*/

//isNaN() is Not a Number

if (isNaN(var1)) {
    elementChapitre7.innerHTML += `<p> var1 n'a pas une valeur numérique </p>`;
} else {
    elementChapitre7.innerHTML += `<p> var1 a une valeur numérique </p>`;
}

if (isNaN(var2)) {
    elementChapitre7.innerHTML += `<p> var2 n'a pas une valeur numérique </p>`;
} else {
    elementChapitre7.innerHTML += `<p> var2 a une valeur numérique </p>`;
}

// Condition switch(){...}

let couleur = 'rouge';

elementChapitre7.innerHTML += `<p>Autre outil pour mettre en place des conditions : switch</p>`;

switch (couleur) {
    case 'bleu':
        elementChapitre7.innerHTML += '<p> Vous aimez le bleu</p>';
        break;
    case 'rouge':
    elementChapitre7.innerHTML += '<p> Vous aimez le rouge</p>';
        break;
    case 'vert':
    elementChapitre7.innerHTML += '<p> Vous aimez le vert</p>';
        break;
    default:
        elementChapitre7.innerHTML += `<p> Vous n'aimez rien</p>`;
        break;
}

// Exercice : réécrire la même condition avec des if / else if / else.

if (couleur == 'rouge') {
    elementChapitre7.innerHTML += `<p> vous aimez le rouge avec des if</p>`;
}

else if (couleur == 'jaune') {
        elementChapitre7.innerHTML += `<p> vous aimez le jaune avec des if</p>`;
}
else if (couleur == 'bleu') {
        elementChapitre7.innerHTML += `<p> vous aimez le bleu avec des if</p>`;
}
else if (couleur == 'vert') {
        elementChapitre7.innerHTML += `<p> vous aimez le vert avec des if</p>`;
}
else {
    elementChapitre7.innerHTML += `<p>Vous n'aimez rien malgré les if/else if</p>`;
}

// **********
// Chapitre 8 : Les boucles
// **********

let elementChapitre8 = document.getElementById('contenuChapitre8');

// Une boucle permet de répéter un ensemble de condition selon une condition d'entrée
// 3 informations sont nécessaires :
// 1- La valeur de départ (compteur)
// 2- condition d'entrée (basée sur la caleur du compteur)
// 3- Incrémentation ou décrémentation (pas)

// Boucle while(…) -- Tant que
let i = 0; // valeur de départ

while (i < 10) { // condition d'entrée
    elementChapitre8.innerHTML += i + '<br>'; // à chaque tour de boucle on affiche la valeur du compteur i
    i++; //incrémentation raccourcie d'écriture pour (i = i +1).
}

elementChapitre8.innerHTML += `<hr>`;

// Boucle for(…)
// for(valeur_de_depart ; condition_entrée ; incrémentation) {…}

for (i = 0; i < 10; i++){
    elementChapitre8.innerHTML += i + ' - ';
}

elementChapitre8.innerHTML += '<hr>';

for (i = 0; i < 10; i++) {
    if (i != 9) {
        elementChapitre8.innerHTML += i + " - ";
    } else {
        elementChapitre8.innerHTML += i;
    }
}

// faire une boucle qui affiche de 0 à 99 (100 tours) en revanche, le chiffre 50 doit être de couleur rouge !
elementChapitre8.innerHTML += '<hr><hr>';

for (a = 0; a < 100; a++) {
    if (a == 50) {
        elementChapitre8.innerHTML += '<span style="color:red;">' + a + '</span>' + ' - ';
    } else if (a == 99) {
        elementChapitre8.innerHTML += a;
    } else {
        elementChapitre8.innerHTML += a + ' - ';
    }
}


// **********
// Chapitre 9 : Fonctions prédéfinies (fonctions globales)
// **********

let elementChapitre9 = document.getElementById('contenuChapitre9');

// Une fonction prédéfinie est déjà inscrite au langage, le développeur ne fait que l'éxecuteur, à l'inverse d'une fonction utilisateur créée par le développeur et ensuite éxecutée.

// parseInt(chaine,base)
// parseInt() est une fonction permettant de transformer une chaîne de caractère en un chiffre entier de type number
// argument chaîne : la chaîne à traiter pour la transformer en type number.
// argument base : la base arythmétique (base 10 pour les chiffres de 0 à 9).
// valeur de retour : un number ou NaN (Not a Number) si la chaîne n'est pas numérique.

let uneChaine = '123'; // valeur numérique de type string.
uneChaine = parseInt(uneChaine, 10);

elementChapitre9.innerHTML += '<p> La chaîne est traitée avec un parseInt() ' + typeof uneChaine + '</p>';

// **********
// Chapitre 10 : fonction utilisateur
// **********

let elementChapitre10 = document.getElementById('contenuChapitre10');

// Déclaration d'une fonction : méthode function statement

function maFonction() {
    // Une fonction simple sans argument et qui renvoit une chaîne de caractères.
    return "Bonjour à tous <hr>"
}

// Exécution
elementChapitre10.innerHTML += maFonction(); // 1ere exécution
elementChapitre10.innerHTML += maFonction(); // 2e exécution
elementChapitre10.innerHTML += maFonction(); // 3e exécution

// Fonction avec argument
// Cette fonction permet d'afficher du texte pour dire bonjour à un utilisateur selon son pseudo que l'on récupère en argument.
function direBonjour(qui) {
    return "Bonjour " + qui + ", bienvenu.e sur notre site <br>";
}

// Exécution
elementChapitre10.innerHTML += direBonjour('toi'); // si la fonction attend un argument, il faut la lui fournir au moment de l'éxecution. Cet argument va se placer dans l'argument de réception prévue (dans notre cas 'qui') afin de permettre la bonne exécution du code de la fonction.

// let p = prompt('Quel est votre prénom?');
// elementChapitre10.innerHTML += direBonjour(p);

// fonction pour afficher 3 <hr> dans la page

function separateur(sectionConcernee) {
    return sectionConcernee.innerHTML += '<br><hr><hr><hr><br>';
    sectionConcernee.innerHTML = 'Hello' // après un return, cette ligne ne sera jamais exécutée.
}

separateur(elementChapitre10);

function meteo(saison, temperature) {
    let debut = 'Nous sommes en ' + saison + ' ';
    let suite = 'et il fait ' + temperature + ' degrés';

    if (saison == 'printemps') {
        debut = 'Nous sommes au ' + saison + ' ';
        return debut + suite + '<br>';
    } else if (temperature == 1 || temperature == -1 || temperature == 0) {
        suite = 'et il fait ' + temperature + ' degré';
        return debut + suite + '<br>';
    } else {
        return debut + suite + '<br>';
        }
        
}

elementChapitre10.innerHTML += meteo('été', 32);
elementChapitre10.innerHTML += meteo('hiver', -1);
elementChapitre10.innerHTML += meteo('automne', 12);
elementChapitre10.innerHTML += meteo('printemps', 20);

// Gérer le 'en' ou le 'au' selon la saison et le 's' sur degré selon la température

// Autre façon de déclarer une fonction : function operator

let maFonction2 = function () {
    return 'hello World ! <br>';
}

elementChapitre10.innerHTML += maFonction2(); // la fonction doit être déclarée avant mon éxecution.

// Une variable doit être déclarée avant d'être appelée.

separateur(elementChapitre10);

elementChapitre10.innerHTML += '<b> Environnement global et local <br> </b>';

// L'environnement global correspond à l'intéagralité de notre script.
// l'environnement local est à l'intérieur d'une fonction.

// Lorsque l'on déclare une variable dans une fonction avec var ou let, celle-ci n'existe que dans la fonction où elle est déclarée.

let animal = 'chaton';

function foret() {
    let animal = 'loup';
    return animal;
}

elementChapitre10.innerHTML += animal + '<br>'; //chaton
foret()
elementChapitre10.innerHTML += animal + '<br>'; //chaton
elementChapitre10.innerHTML += foret() + '<br>'; //loup

// L'inverse
let vehicule = 'velo';

function rouler() {
    vehicule = 'voiture';
    return vehicule;
}

elementChapitre10.innerHTML += vehicule + '<br>';
rouler();
elementChapitre10.innerHTML += vehicule + '<br>';

// **********
// Les tableaux de données ARRAY
// **********

let elementChapitre11 = document.getElementById('contenuChapitre11');

// Un tableau array est une variable tableau, elle peut stocker plusieurs valeurs à la fois.
// On utilise les crochets [] pour déclarer un array.

let tabFruits = ['pomme', 'poire', 'cerise', 'ananas', 'kiwi', 'pêche']
console.log(tabFruits);

// Pour afficher l'intégralité du tableau :

elementChapitre11.innerHTML += tabFruits + '<br>';

// Pour afficher un élément du tableau :
elementChapitre11.innerHTML += tabFruits[2] + '<hr>';
// Un tableau commence à 0.


// Pour modifier un élément du tableau : 
tabFruits[2] = 'mangue';
console.log(tabFruits);
elementChapitre11.innerHTML += tabFruits + '<br>';

// Pour connaître la taille d'un array : length. Cette propriété est acccessible en lecture seule.

elementChapitre11.innerHTML += 'Taille du tableau : ' + tabFruits.length;

// Pour rajouter un élément en fin de tableau : la méthode push()
tabFruits.push('banane')
console.log(tabFruits);

// Pour ajouter un élément en debut de tableau : la méthode unshift()
tabFruits.unshift('orange');
console.log(tabFruits);

// Pour supprimer un élément en fin de tableau : pop()
tabFruits.pop();
console.log(tabFruits);

// Pour supprimer un élément en début de tableau : shift()
tabFruits.shift();
console.log(tabFruits);

elementChapitre11.innerHTML += '<hr>' + '<b>Tableau de données multidimensionnel <br></b>'; // Imbrication de tableaux.

let personnes = [
    ['Marie', 'Dupond', 'marie@mail.fr'],
    ['Jean', 'Lapièce', 'jean@mail.fr'],
    ['Eric', 'Zamour', 'eric@mail.fr']
]

console.log(personnes);

elementChapitre11.innerHTML += personnes[0][2] + '<hr>';

// La boucle for(…in…) pour les array et les objets

let tabJours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
console.log(tabJours);

for (let indice in tabJours) {
    elementChapitre11.innerHTML += ' - ' + tabJours[indice] + '<br>';
}
// let indice représente l'indice en cours à chaque tour de boucle
// La boucle for in tourne autant de fois qu'il y a d'éléments dans le tableau concerné
// for in va itérer au niveau des indices, si je veux afficher la valeur existante à un indice donné, il faudra donc que je fasse tabJours[indice]

separateur(elementChapitre11);

// La boucle for(…of…) pour les array et les objets


for (let valeur of tabJours) {
 elementChapitre11.innerHTML += ' - ' + valeur + '<br>';
}

// let valeur représente la valeur en cours à chaque tour de boucle.
// la boucle for…of tourne autant de fois qu'il y a d'éléments dans le tableau.
// let valeur itère au niveau des valeurs; si je veux afficher la valeur existante, je passe par un affichage direct.

// **********
// Chapitre 12 : Les Objets Globaux
// **********

let elementChapitre12 = document.getElementById('contenuChapitre12');

// Un objet est un conteneur virtuel permettant de conserver des informations (propriété ou attribut de l'objet) ainsi que du fonctionnel (méthodes de l'objet)
// Une variable simple => information
// un tableau array => un ensemble d'informations
// Un objet => propriétés et des méthodes ( = variables et fonctions)

// Un valeur dans JS est un objet, car elle hérite de l'objet global correspondant à son type primitif.
// Par exemple, une chaîne de caractère hérite des propriétés et méthodes de l'objet global 'string'.

// **********
// Objet global String
// **********

//  Cette variable phrase contient du texte. En réalité c'est un objet JS qui hérite de la propriété et des méthodes de l'objet global STRING.
// Une seule propriété pour les objets string : length +> longueur de la chaîne.

let phrase = 'Bonjour, nous sommes mercredi, il fait beau';
elementChapitre12.innerHTML += phrase + "<br>";

elementChapitre12.innerHTML += 'Taille de la chaîne : ' + phrase.length + '<br>';

// indexOf est une méthode permettant de chercher la position d'un caractère ou d'une chaîne de caractère dans une autre chaîne.
//  Si le caractère ou la chaîne est trouvée, on obtient un chiffre : la position de la chaîne. Sinon on obtient -1, car ce qu'on cherche n'est pas présent.

let positionMercredi = phrase.indexOf('mercredi');
console.log(positionMercredi);
// Attention, indexOf() nous renvoit la position du 1er caractère de ce qu'il cherche, mais la position du 1er caractère de la chaîne est à 0.
// Si -1 : ce que l'on cherche n'est pas présent.

// substring() permet de découper une chaîne en fournissant un ou deux arguments
// Avec 1 seul argument, celui-ci représente la position de départ à partir de laquelleon coupe et récupère le reste de la chaîne.
// Avec 2 arguments, le 1er représente la position de départ, le second la position de fin de ce que l'on veut récupérer.

let positionDepart = phrase.indexOf('mercredi');
let positionFin = phrase.indexOf('mercredi') + 'mercredi'.length;

let mot = phrase.substring(positionDepart, positionFin);
elementChapitre12.innerHTML += '<hr>' + mot + '<hr>';

// toLowerCase() pour passer une chaîne en minuscule.
// toUpperCase() pour passer une chaîne en majuscule.

let maj = 'BONJOUR';
let min = 'à tous';

elementChapitre12.innerHTML += maj.toLowerCase() + ' ' + min.toUpperCase() + '<hr>';

// **********
// L'objet global Math
// **********

// Outil permettant de réaliser des opérations mathématiques

separateur(elementChapitre12);

elementChapitre12.innerHTML += '<b> Objet global Math :</b><br>';

// Méthode pour arrondir à l'entier inférieur : Math.floor()

elementChapitre12.innerHTML += 'la valeur 7.9 avec la méthode Math.floor() : ' + Math.floor(7.9) + '<hr>';

// Méthode pour arrondir à l'entier supérieur : Math.ceil()

elementChapitre12.innerHTML += 'la valeur 7.1 avec la méthode Math.ceil() : ' + Math.ceil(7.1) + '<hr>';

// Méthode pour arrondir à l'entier le plus proche : Math.round()

elementChapitre12.innerHTML += 'la valeur 7.1 avec la méthode Math.round() : ' + Math.round(7.1) + '<br>';
elementChapitre12.innerHTML += 'la valeur 7.9 avec la méthode Math.round() : ' + Math.round(7.9) + '<br>';
elementChapitre12.innerHTML += 'la valeur 7.5 avec la méthode Math.round() : ' + Math.round(7.5) + '<br>';

// **********
// L'objet global Date
// **********

// Outil permettant de manipuler les dates

separateur(elementChapitre12);

elementChapitre12.innerHTML += '<b> Objet global Date : </b><br>';

// L'opérateur new permet de créer un nouvel objet à partir d'un constructeur que existe de manière native ou défini par l'utilisateur.
// Pour configurer l'objet global Date(), nous devons passer par l'opérateur new.

let aujourdhui = new Date();
console.log(aujourdhui);
elementChapitre12.innerHTML += 'Date du jour : ' + aujourdhui + '<hr>';

// Pour avoir l'année en 4 chiffres
elementChapitre12.innerHTML += 'année en cours : ' + aujourdhui.getFullYear() + '<br>';

// Pour avoir le numéro du jour dans le mois
elementChapitre12.innerHTML += 'Quel jour dans le mois : ' + aujourdhui.getDate() + '<hr>';

// Pour avoir le numéro du jour dans la semaine (le numéro 0 correspond au dimanche)

let tabJour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

elementChapitre12.innerHTML += 'Quel jour dans la semaine : ' + aujourdhui.getDay() + '<br>';

elementChapitre12.innerHTML += 'Quel jour dans la semaine : ' + tabJour[aujourdhui.getDay()] + '<hr>';

// Pour avoir le numéro du mois dans l'année (le numéro 0 correspond à janvier)

let tabMois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet','août', 'septembre', 'octobre', 'novembre', 'décembre']

elementChapitre12.innerHTML += 'Quel mois dans l\'année : ' + aujourdhui.getMonth() + '<br>';

elementChapitre12.innerHTML += 'Quel mois dans l\'année : ' + tabMois[aujourdhui.getMonth()] + '<hr>';

// Pour afficher la date du jour au format français : 01/01/2022

let numJour = aujourdhui.getDate();
let numMois = aujourdhui.getMonth() + 1;
let numAnnee = aujourdhui.getFullYear();

elementChapitre12.innerHTML += `Nous sommes le : ${numJour < 10 ? '0' + numJour : numJour}
                                /${numMois < 10 ? '0' + numMois : numMois}/${numAnnee}`
                                + '<hr>';

// Exercice : faire en sorte qu'il y ait un 0 devant le numéro du jour et du mois lorsque nécessaire.

let day = String(aujourdhui.getDate(2)).padStart(2, '0');
let month = String(aujourdhui.getMonth() + 1).padStart(2, '0');
let year = String(aujourdhui.getFullYear()).slice(-2);

elementChapitre12.innerHTML += `Nous sommes le : ${day}/${month}/${year}` + '<hr>';



let hours = String(aujourdhui.getHours()).padStart(2,'0');
let minutes = String(aujourdhui.getMinutes()).padStart(2,'0');
let seconds = String(aujourdhui.getSeconds()).padStart(2, '0');

let time = `${hours}h${minutes}m${seconds}s`;

elementChapitre12.innerHTML += `Et il est ${time}`;

// **********
// Chapitre 13 : les objets
// **********

let elementChapitre13 = document.getElementById('contenuChapitre13');

// Pour créer un tableau array : []
// Pour créer un objet : {}

let monObjet = {}; // création d'un objet.

elementChapitre13.innerHTML += 'Type de la variable monObjet : ' + typeof monObjet + '<hr>';

monObjet.pseudo = 'admin';

//  autre syntaxe possible (déconseillée) :
monObjet['mail'] = 'admin@mail.fr';

console.log(monObjet);

// Création et remplissage d'un objet

let objetProduit = {
    titre: 'Jean',
    categorie: 'Pantalon',
    prix: 80,
    couleur: ['rouge', 'bleu', 'blanc', 'noir', 'rose'],
    promotion: false,
    stock: 50,
    taux: 20,

    // méthode pour calculer le prix ttc

    calculTTC: function () {
        // this. représente l'élement en cours; ici l'objet objetProduit()
        return this.prixTTC = this.prix * (1 + (this.taux / 100));
    },

    // méthode pour mettre le stock à jour
    calculStock: function (quantite) {
        return this.stock = this.stock - quantite;
    }
}; //fin de déclaration

elementChapitre13.innerHTML += `Bonjour le produit est ${objetProduit.titre}, catégorie : ${objetProduit.categorie}` + '<br>';

elementChapitre13.innerHTML += 'Prix : ' + objetProduit.prix + '€ HT, le prix TTC est de : ' + objetProduit.calculTTC() + '€ TTC <hr>';

elementChapitre13.innerHTML += 'Stock disponible : ' + objetProduit.stock + '<hr>';

objetProduit.calculStock(3);

elementChapitre13.innerHTML += 'Stock disponible après MàJ : ' + objetProduit.stock + '<hr>';

elementChapitre13.innerHTML += 'Première couleur disponible pour ce produit : ' + objetProduit.couleur[0] + '<hr>';

for (let varieteCouleur of objetProduit.couleur) {
    elementChapitre13.innerHTML += '- ' + varieteCouleur + '<br>';
}

// **********
// Bonus : map
// **********

// Permet de retourner un nouveau tableau sur lequel on aura appliqué des modifications sur chacun des éléments

let arr = [1, 2, 3, 4, 5];

// Map prend en argument une fonction. On appelle cette fonction callback.
// Une fonction callback est une fonction passée dans une autre fonction en tant qu'argument.
// C'est une fonction anonyme (sans nom); elle ne peut être appelée pour être exécutée.

let arrPlusUn = arr.map(
    function (nombre) {
    console.log(nombre);
    return nombre + 1;
    }
);

console.log(arrPlusUn);

// autre façon d'écrire :
// let arrPlusUnF = arr.map(nombre => nombre +1)
// Il s'agit d'une fonction fléchée;
// Lorsqu'un une fonction fléchée n'a pas d'argument, elle doit reprendre ses parenthèses ()=>;