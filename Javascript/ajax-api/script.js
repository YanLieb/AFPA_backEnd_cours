// ----------
// Ajax - API
// ----------

// AJAX est un raccourci pour Asynchronous Javascript And XML

// Fonctionnement
// Suite à une action de l'utilisateur, un script JS envoie une requête http vers le serveur en utilisant l'objet XMLHttprequest.
// XMLHttprequest a été créé uniquement pour envoyer des requêtes http en post ou en get vers un serveur.
// Le serveur reçoit la requête, prépare la réponse et l'envoie au navigateur.
// Le JS reçoit la réponse et l'insère dans le bloc conerné dans la page web sans la recharger.

// Pourquoi asynchronous?
// Ce terme AJAX signifie que les requêtes envoyées vers le serveur sont asynchrones : le JS n'attend pas la réponse du serveur pour continuer sont exécution. C'est seulement que une réponse est reçue qu'une fonction se déclenche pour la traiter et l'insérer dans la page.

// XML et JSON : 
// XML signifie eXtensible Markup Language. C'est une façon de structurer les données dans les balises personnalisées. Ainsi on peut envoyer ces informations d'une serveur vers un client.
// JSON signifie JavaScript Object Notation. C'est une autre façon de structurer les données inspirée de la notation des objets en JavaScript.
// Exemple =
// {
    // "prenom" : "john",
    // "nom" : "malkovitch"
// }
// Les paires indices/valeurs sont obligatoirement en guillemets.


let lat = document.getElementById('lat'),
    lon = document.getElementById('lon');

// Lancement de la fonction requete au clic du bouton.
document.getElementById('testapi').addEventListener('click', function (e) {
    e.preventDefault();
    let resLat = lat.value,
        resLon = lon.value;
    console.log(resLon + ' - ' + resLat);

    requete()
});

function requete() {
    // Création d'un objet de type XMLHttpRequest
    let req = new XMLHttpRequest;
    
    // Création de la fonction à éxecuter lors du changement de readystate
    // Les états possibles de 'readystate' :
    // The state of the request:
        // 0 UNINITIALIZED open() has not been called yet.
        // 1 LOADING send() has not been called yet.
        // 2 LOADED send() has been called, and headers and status are available.
        // 3 INTERACTIVE Downloading; responseText holds partial data.
        // 4 COMPLETED The operation is complete.
    
    // Quelques statuts http :
        // 200 = Requête OK
        // 403 = Accès interdit
        // 404 = Page ou fichier introuvable
        // 500 = Erreur interne du serveur
    
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { // ou bien httpRequest.readyState === XMLHttpRequest.DONE
            // On récupère la réponse que l'on passe dans la fonction JSON.parse
            let resultat = JSON.parse(this.responseText);
            console.log(resultat);
            document.getElementById('affichage').innerHTML = "La ville correspondante est : " + resultat.name;
        } else if (this.readyState == 4 && this.status == 404) {
            alert('erreur 404');
        }
    }

    // GET récupérer du contenu
    // POST envoyer du contenu
    // En 2e paramètre, on peut mettre le fichier ou l'api dans laquelle on récupère les données
    req.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+lat.value+"&lon="+lon.value+"&appid=c03a26111550c2a58faab01c3921ccc9", true); //true spécifie que nous souhaitons un traitement asynchrone.
    req.responseType = "text";
    req.send();
};