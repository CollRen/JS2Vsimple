import {oLivres} from './oLivres.js';
import Panier from './Panier.js';
import Bibliotheque from './Bibliotheque.js';



// Lancer les instance de class
// 

//import { appelleTests } from '../tests/appelleTests.test.js';

window.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Vérification du localStorage
     * S'il contient des éléments, le panier délaisse le noir pour un vert kaki
     */
    const panier = document.querySelector('.panier');
    let panierLS = localStorage.getItem('contenuPanier');
    if(panierLS) panier.classList.add('panier_contenu');
    
    
    const elsBibliotheque =  document.querySelectorAll('[data-js-bibliotheque]');
    for (let i = 0, l =  elsBibliotheque.length; i < l; i++) {
        new Bibliotheque(elsBibliotheque[i], 'base');
    }
});
//appelleTests();