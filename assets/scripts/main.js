import {oLivres} from './oLivres.js';
import Panier from './Panier.js';
import Bibliotheque from './Bibliotheque.js';



// Lancer les instance de class
// 

//import { appelleTests } from '../tests/appelleTests.test.js';

window.addEventListener('DOMContentLoaded', function() {

    
    
    const elsBibliotheque =  document.querySelectorAll('[data-js-bibliotheque]');
    for (let i = 0, l =  elsBibliotheque.length; i < l; i++) {
        console.log(elsBibliotheque[i]);
        new Bibliotheque(elsBibliotheque[i], 'base');
    }
    
    /**
     * Vérification du localStorage 
     * @param object Récupérer l'objet qui s'y trouve
     */
    /* const localStorage = localStorage.getItem("contenuPanier"); */
    /**
     * 
     * @param dom svg du panier
     */
    const elPanier =  document.querySelector('[data-js-panier]');
    if (elPanier) new Panier(elPanier);

});
//appelleTests();