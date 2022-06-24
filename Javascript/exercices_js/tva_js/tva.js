let resultat = document.getElementById('resultat');
    
function calculTTC() {
    let prixHT = Number(document.getElementById('prixHT').value);
    let tva = (prixHT * 20) / 100;
    let prixTTC = prixHT + tva;
    
    if (prixHT > 0) {
        console.log = prixTTC.toFixed(2);
        resultat.innerHTML = `Le montant avec TVA de 20% est de : ${prixTTC.toFixed(2)}€`;

    } else {
        resultat.innerHTML = 'Veuillez saisir un montant positif!'
        }
}