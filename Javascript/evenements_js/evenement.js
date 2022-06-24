/**
 * 3 façons de mettre en place un évènement JS
 * 
 * Anciennement :
 * 1) Par un attribut HTML d'évènement (ex : onclick = "")
 *      <div onclick = "alert ("hello")>Cliquez ici pour voir l'alerte</div>
 * 
 * 2) Par l'évènement directement en JS : 
 *      document.getElementById.('unID').onclick = function(){
 *      … code …
 *      }
 * 
 * La bonne pratique : 
 *  On ajoute un écouteur d'évènement avec addEventListener :
 *      document.getElementById('unID').addEventListener('click', function(){
 *      … code …
 *      })
 **/

document.getElementById('div1').addEventListener('click', function () {
    // console.log('click')
    console.log(this.style.backgroundColor);

    let couleurActuelle = this.style.backgroundColor;

    if (couleurActuelle == 'cornflowerblue') {
        this.style.backgroundColor = 'red';
        this.style.width = '200px';
    } else if (couleurActuelle == 'red') {
        this.style.backgroundColor = 'orange';
        this.style.width = '150px';
    } else if (couleurActuelle == 'orange') {
        this.style.backgroundColor = 'purple';
        this.style.width = '200px';
    } else {
        this.style.backgroundColor = 'cornflowerblue';
        this.style.width = '100px';
    }

}); //fin de l'évènement click

// Evenement DBCLICK

document.getElementById('div2').addEventListener('dblclick', function () {
    
    let posTop = this.style.top;
    console.log(posTop);
    let posLeft = this.style.left;
    console.log(posLeft);

    if (posTop == '0px' && posLeft == '0px') {
        this.style.left = '100px';
    } else if (posTop == '0px' && posLeft == '100px') {
        this.style.top = '100px';
    } else if (posTop == '100px' && posLeft == '100px') {
        this.style.left = '0px';
    } else {
        this.style.top = '0px';
    }
}); //fin de l'évènement dblclick

// Evenement mouseEnter & mouseLeave

let listeImage = document.querySelectorAll('#blocImage1 img');

document.getElementById('blocImage1').addEventListener('mouseenter', function () {
    console.log('je suis mouseenter');
    console.log(listeImage);

    listeImage[0].style.top = '-360px';
    listeImage[1].style.top = '-360px';
});

document.getElementById('blocImage1').addEventListener('mouseleave', function () {
    console.log('je suis mouseleave');
    console.log(listeImage);

    listeImage[0].style.top = '0';
    listeImage[1].style.top = '0';
});

// Carrousel

document.getElementById('changerImage').addEventListener('click', function (e) {
    // en plaçant un argument de réception dans la fonction, ici (e), on récupère l'évènement, nous permettant de le bloquer.
    // preventDefault() permet d'annuler un évènement, ici le rechargement de la page lors du clic.
    e.preventDefault();

    let imageEnCours = document.getElementById('blocImage2').getAttribute('data-image');
    console.log(imageEnCours);

    // Les images sont superposées; sauf la première, elles sont toutes transparentes.

    if (imageEnCours == 'image1') {
        document.getElementById('image1').style.opacity = "0";
        document.getElementById('image2').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image2'); 
    } else if (imageEnCours == 'image2') {
        document.getElementById('image2').style.opacity = "0";
        document.getElementById('image3').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image3'); 
    }  else if (imageEnCours == 'image3') {
        document.getElementById('image3').style.opacity = "0";
        document.getElementById('image4').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image4'); 
    } else if (imageEnCours == 'image4') {
        document.getElementById('image4').style.opacity = "0";
        document.getElementById('image5').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image5'); 
    } else {
        document.getElementById('image5').style.opacity = "0";
        document.getElementById('image1').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image1'); 
    }

});

// Pour déclencher une fonction selon un timer =  setInterval(la_fonction, timer_millisecondes)
// Une fonction de retour (callback) est appelée par une autre qui l'a reçue en tant que paramètre (argument).
// Quand on passe une fonction en paramètre, on donne juste son nom, sans les parenthèses.

let animationCarousel = setInterval(activeCarousel, 4000);

function activeCarousel() {
   
    let imageEnCours = document.getElementById('blocImage2').getAttribute('data-image');
    console.log(imageEnCours);

    // Les images sont superposées; sauf la première, elles sont toutes transparentes.

    if (imageEnCours == 'image1') {
        document.getElementById('image1').style.opacity = "0";
        document.getElementById('image2').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image2'); 
    } else if (imageEnCours == 'image2') {
        document.getElementById('image2').style.opacity = "0";
        document.getElementById('image3').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image3'); 
    }  else if (imageEnCours == 'image3') {
        document.getElementById('image3').style.opacity = "0";
        document.getElementById('image4').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image4'); 
    } else if (imageEnCours == 'image4') {
        document.getElementById('image4').style.opacity = "0";
        document.getElementById('image5').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image5'); 
    } else {
        document.getElementById('image5').style.opacity = "0";
        document.getElementById('image1').style.opacity = "1";
        document.getElementById('blocImage2').setAttribute('data-image', 'image1'); 
        // clearInterval(animationCarousel);
    }

}