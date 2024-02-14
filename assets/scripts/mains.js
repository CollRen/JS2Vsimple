import {oLivres} from './oLivres.js';
import Panier from './Panier.js';
import Livre from './Livre.js';

//import { appelleTests } from '../tests/appelleTests.test.js';

window.addEventListener('DOMContentLoaded', function() {
    
    new Panier;

    for (let i = 0; i < oLivres.length; i++) {
        oLivres[i].index = i; 
    }
    let elsFiltres = document.querySelectorAll('[data-js-filtre]');
    for (let i = 0; i < elsFiltres.length; i++) {
        //console.log(elsFiltres[i])
        //elsFiltres[i].classList.toggle('filtre--selectionne', false); Devra être placé au bon endroit!

    }

    function init() {

        this.domTuile.innerHTML = '';
        for (let i = 0; i < this.insertArray.length; i++) {

        let dom = `
        <div class="encadre" data-js-livre=${i}>
            <img src="${this.insertArray[i].image}" alt="">
            <p>${this.insertArray[i].categorie}</p>
            <div class="grille--2__container">
                <strong>${this.insertArray[i].prix}<nbsp></nbsp>$</strong>
                <div class="ajout-panier" data-js-ajouter-panier="${this.insertArray[i].index}">Ajouter</div>
            </div>
        </div>`;

        this.domTuile.insertAdjacentHTML('beforeend', dom);
        new Livre(this.domTuile.lastElementChild);
    }
}

 //appelleTests();
});


// titre, auteur, description, prix, editeur, pages, image, nouveaute, categorie