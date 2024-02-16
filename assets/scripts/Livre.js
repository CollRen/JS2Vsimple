import Bibliotheque from "./Bibliotheque.js";
import { oLivres } from "./oLivres.js";

export default class Livre {

    constructor(_el) {
        this._el = _el;
        this._elModal = document.querySelector('[data-js-modal]');
        console.log(this._elModal);
        this.init();
    }

    init() {

        this._el.addEventListener('click', function(onClick) {
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
            console.log( this._elModal);
            this._elModal.insertAdjacentHTML('afterbegin', dom);
    }.bind(this));
    }


    
}