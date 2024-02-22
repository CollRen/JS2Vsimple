import Bibliotheque from "./Bibliotheque.js";
import { oLivres } from "./oLivres.js";

export default class Livre {

    constructor(_el) {
        this._el = _el;
        this._eladdToPanier = this._el.querySelector('[data-js-ajouter-panier]');
        this._elImage = this._el.querySelector('.livre__img');
        this._elModal = document.querySelector('[data-js-modal]');

       
        this.init();
    }

    init() {
        this._eladdToPanier.addEventListener('click', function(onClick) {
            let index = onClick.currentTarget.dataset.jsAjouterPanier;
            let titre = oLivres[index].titre;
            console.log(titre);
            console.log(onClick.currentTarget.dataset.jsAjouterPanier);
            //console.log(onClick.currentTarget.dataset.value);
/*             let objInsert = {};
            localStorage.setItem('index', JSON.stringify(index)); */

        }.bind(this));


        /**
         * Affichage du modal 'détail livre' au click
         */
        const body = document.querySelector('.body');
        this._elImage.addEventListener('click', function(onClick) {
                let y = onClick.currentTarget.dataset.jsLivre;
                let dom = 
                `
                <div class="livre__detail">
                <br>
                <img src="${oLivres[y].image}" alt="">
                <br>
                <div class="livre__detail--right">
                <br>
                <p>Titre: ${oLivres[y].titre}</p>
                <br>
                <p><small>Auteur: </small>${oLivres[y].auteur}</p>
                <br>
                <p><small>Éditeur: </small>${oLivres[y].editeur}</p>
                <br>
                <p><small>Pages: </small>${oLivres[y].pages}</p>
                <br>
                <p>${oLivres[y].description}</p>
                </div>
                <div class="livre__detail--x">X</div>
                </div>
                `;
                this._elModal.insertAdjacentHTML('afterbegin', dom);

                

            }.bind(this));

        
            
    }


    }




    
