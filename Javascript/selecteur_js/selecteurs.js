/*
* DOM : Document Object Model
*/

// Le DOM est une interface interne au navigateur
// Il permet que chaque élément html (balises), chaque attribut (href, alt, src, id, class, title, etc.) et chaque évènement (chargement de la page, click, dbclick, mousenter, mouseout, keypress, keyup, etc.) est un objet récupérable et manipulable en JS.

// **********
// Sélection par l'ID
// **********

let sectionElem = document.getElementById('maSection');
console.log('section : ' + sectionElem); 
// la console affiche : [object HTMLElement]

// Pour manipuler le CSS des éléments, on passe par son attribut '.style'.
sectionElem.style.backgroundColor = 'steelblue';
sectionElem.style.fontSize = '42px';
sectionElem.style.padding = '30px';
sectionElem.title = 'Un test';

// **********
// Sélection par le nom de classe
// **********

let mesElemDiv = document.getElementsByClassName('mesDivs');
console.log('Mes éléments div : ' + mesElemDiv);
// la console affiche : [object HTMLCollection]

console.log(mesElemDiv);

mesElemDiv[0].textContent = 'Nous sommes vendredi';

for (let i = 0; i < mesElemDiv.length; i++){
    // style.cssText remplace tout le contenu de l'attribut style.
    mesElemDiv[i].style.cssText = 'font-family: sans-serif; font-size: 21px; color: steelblue; background-color: lightblue; padding: 10px;';
    mesElemDiv[i].style.marginTop = '10px';

    // setAttribute('nom de l'attribut, 'sa valeur') = permet d'assigner et de manipuler un attribut
    // getAttribute('nom de l'attribut) = permet de récupérer la valeur d'un attribut.
    mesElemDiv[i].setAttribute('title', 'hello title');
}

// **********
// Selection par le nom de la balise
// **********

let mesElemP = document.getElementsByTagName('p');
console.log('Mes éléments p : ' + mesElemP);
// la console affiche : [object HTMLCollection]
console.log(mesElemP);

let bgColor = 321235;

for (let y = 0; y < mesElemP.length; y++){
    mesElemP[y].style.backgroundColor = "#" + bgColor;
    mesElemP[y].style.padding = '20px';
    mesElemP[y].style.color = 'white';

    // on change la valeur de bgColor à chaque tour de boucle.
    bgColor += 11111;
    console.log(bgColor);
}

// **********
// SELECTION avec querySelector() et querySelectorAll()
// **********

// querySelector() nous renvoit le premier élément correspondant au sélecteur mis dans les parenthèses.
// querySelectorAll() renvoit tous les éléments correspondant au sélecteur entre parenthèses

let premierElementP = document.querySelector('body p');
console.log('Le 1er élement P : ' + premierElementP);
// la console affiche : [object HTMLParagraphElement]
console.log(premierElementP);

let tousLesDivEtP = document.querySelectorAll('div,p');
console.log('Tous les éléments div et les P : ' + tousLesDivEtP);
// la console affiche : [object NodeList]
console.log(tousLesDivEtP);

// **********
// Sélection : cas particulier
// ***********

// On peut appeler directement le nom de l'ID
let idResultat = resultat;
console.log('Mon élément avec id résultat : ' + idResultat);
// la console affiche : [object HTMLDivElement]
console.log(idResultat);

// On appelle directement l'élément body; fonctionne aussi pour head.
let monElemBody = document.body;
console.log('Mon élément body : ' + monElemBody);
// la console affiche : [object HTMLBodyElement]
console.log(monElemBody);

// **********
// Résumé
// **********

// Selection naturelle : => id /document.body / document.head
// Par son id => document.getElementById();
// Par sa classe => document.getElementByClassName();
// Par sa balise => document.getElementByTagName();
// Par un sélecteur (css) => document.querySelector() ou document.querySelectorAll();