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


    /* 
    [{"titre":"J'ai faim !","prix":15},{"titre":"Rock attitude","prix":20},{"titre":"Un ami pour ours polaire","prix":20}]
    */

    /**
     * Au click d'un filtre
     * 
     * Lancer l'affichage des livres en conséquence
     */
    /*
    const filtres = document.querySelectorAll('[data-js-filtre]');
    filtres.forEach(function(onFiltre) {
        onFiltre.addEventListener('click', function(filtreChoisi){
            let typeFiltre = filtreChoisi.currentTarget.dataset.jsFiltre;
            
            new Bibliotheque(typeFiltre);
            
        });
    });
    */



   

});
//appelleTests();

// titre, auteur, description, prix, editeur, pages, image, nouveaute, categorie