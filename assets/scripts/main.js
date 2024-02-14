import {oLivres} from './oLivres.js';
import Panier from './Panier.js';
import Livre from './Livre.js';
import Bibliotheque from './Bibliotheque.js';

//import { appelleTests } from '../tests/appelleTests.test.js';

window.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Affichage de 12 livre à l'ouverture de la page
     */
    new Bibliotheque('base');

    /**
     * Au click du panier
     * 
     * @param array contenu du local strorage
     */
    const panier =  document.querySelector('[data-js-panier]');
    panier.addEventListener('click', function(onClick){
        console.log('go');
    });

    /**
     * Au click d'un filtre
     * 
     * Lancer l'affichage des livres en conséquence
     */
    const filtres = document.querySelectorAll('[data-js-filtre]');
    filtres.forEach(function(onFiltre) {
        onFiltre.addEventListener('click', function(filtreChoisi){
            let typeFiltre = filtreChoisi.currentTarget.dataset.jsFiltre;
            
            new Bibliotheque(typeFiltre);
            
        });
    });



   

});
//appelleTests();

// titre, auteur, description, prix, editeur, pages, image, nouveaute, categorie