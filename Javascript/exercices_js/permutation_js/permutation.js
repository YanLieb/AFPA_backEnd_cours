    var nombre1 = 5;
    var nombre2 = 3;
    // Tapez votre code ici (sans rien modifier d'autre !)
        let temp;

        temp = nombre1;
        nombre1 = nombre2;
        nombre2 = temp;
                
        document.write(`nombre1 vaut désormais : ${nombre1}`+ '<br>');
        document.write(`nombre2 vaut désormais : ${nombre2}`+ '<br>');

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5

