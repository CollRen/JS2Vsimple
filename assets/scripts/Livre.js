import Bibliotheque from "./Bibliotheque.js";
import { oLivres } from "./oLivres.js";

export default class Livre {

    constructor(_el) {
        this._el = _el;
        this._elModal = document.querySelector('[data-js-modal]');

       
        this.init();
    }

    init() {
        const body = document.querySelector('.body');
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
                this._elModal.insertAdjacentHTML('afterbegin', dom);

                const elModalOn = document.querySelector('.livre__detail');
                if(onClick) {
                    let x = 0;
                    if(x == 1) {
                    body.addEventListener('click', function(onCloseClick) {
                        console.log(onCloseClick);
                        elModalOn.remove();
                    }.bind(this));

                    }
                x++;
                }

            }.bind(this));


/*             elModalOn.addEventListener('click', function(onClick) {
                console.log(onClick);
                onClick.remove();
        
            }); */
    }

    }




    
