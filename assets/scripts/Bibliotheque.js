import {oLivres} from './oLivres.js';
import Livre from './Livre.js';
export default class Bibliotheque {

    constructor(el, base) {
        this._el = el; 
        this._filtre = base;
        this._filtreActuel;
        this._elsFiltre = this._el.querySelectorAll('[data-js-filtre]');
        this.tuile = document.querySelector('[data-js-tuile]');
        this._elLivres = this._el.querySelector('[data-js-livres]')
        this.arrayLivre = oLivres;
        this.init();
    }

    init() {
        this.affichage();
        this.filtreClic();
        //this.onFilterClic();
    }

    /**
     * Au click d'un filtre
     * Lancer l'affichage des livres en conséquence
     */
    filtreClic() {
        for (let i = 0, l = this._elsFiltre.length; i < l; i++) {
            this._elsFiltre[i].addEventListener('click', function(filtreChoisi){
                this._filtre = filtreChoisi.currentTarget.dataset.jsFiltre;
                //this._filtreActuel = this._elsFiltre[i];
                this.affichage();
            }.bind(this));         
        }
    }


    affichage() {
        //this._filtreActuel.classList.add('filtre--clicked');
        this.newArrayLivre = this.arrayLivre;

        switch (this._filtre) {
            case 'base':
                this.affBase(12);
            break;

            case 'Tous':
                this.affBase(this.newArrayLivre.length);
            break;

            case 'Nouveautés':
                this.newArrayLivre = [];
                for (let i = 0; i < oLivres.length; i++) {
                    if(oLivres[i].nouveaute == true){
                        this.newArrayLivre.push(oLivres[i]);
                    }}
                    this.affBase(this.newArrayLivre.length);
                break;
                        
            default:
                this.newArrayLivre = [];

                for (let i = 0; i < oLivres.length; i++) {

                    if(this._filtre == oLivres[i].categorie){
                        this.newArrayLivre.push(oLivres[i]);
                }
                this.affBase(this.newArrayLivre.length);
            }
            break;
        }
    }


    affBase(nbrAff) {
        //while (this.tuile.firstChild) {
        //    this.tuile.removeChild(this.tuile.firstChild);
        //  }
        this._elLivres.innerHTML = '';
        for (let i = 0; i < nbrAff; i++) {

            let dom = `
                <div class="encadre insertedContent" data-js-livre=${i}>
                    <img src="${this.newArrayLivre[i].image}" alt="">
                    <p>${this.newArrayLivre[i].categorie}</p>
                    <div class="grille--2__container">
                        <strong>${this.newArrayLivre[i].prix}<nbsp></nbsp>$</strong>
                        <div class="ajout-panier" data-js-ajouter-panier="${i}">Ajouter</div>
                    </div>
                </div>`;
            this._elLivres.insertAdjacentHTML('beforeend', dom);

            new Livre(this._elLivres.lastElementChild);
        }
    }
  
    
}