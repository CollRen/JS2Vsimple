import {oLivres} from './oLivres.js';
import Panier from './Panier.js';
import Livre from './Livre.js';
import Bibliotheque from './Bibliotheque.js';



// Lancer les instance de class
// 

//import { appelleTests } from '../tests/appelleTests.test.js';

window.addEventListener('DOMContentLoaded', function() {
    let newPanier;
    /**
     * Vérification du localStorage 
     * @param object Récupérer l'objet qui s'y trouve
     */

    /* const localStorage = localStorage.getItem("contenuPanier"); */
    

    /**
     * Affichage de 12 livre à l'ouverture de la page
     */
    //new Bibliotheque('base');

    const elsBibliotheque =  document.querySelectorAll('[data-js-bibliotheque]');

    for (let i = 0, l =  elsBibliotheque.length; i < l; i++) {
        console.log(elsBibliotheque[i]);
        new Bibliotheque(elsBibliotheque[i], 'base');
    }


    /**
     * Au click du panier
     * 
     * @param array contenu du local strorage
     */
    const elPanier =  document.querySelector('[data-js-panier]');
    if (elPanier) new Panier(elPanier);

    /*
    elPanier.addEventListener('click', function(onClick){
        
        if (localStorage.getItem("contenuPanier") !== null) {
            new Panier(localStorage.getItem("contenuPanier"));
          } else {
            let localStorageVide = {};
            new Panier(localStorageVide);
          }
    });
    */

});
//appelleTests();