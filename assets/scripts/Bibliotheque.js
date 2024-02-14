import {oLivres} from './oLivres.js';

export default class Bibliotheque {

    constructor(_elFiltre) {
        this._elFiltre = _elFiltre;
        this.tuile = document.querySelector('[data-js-tuile]');
        this.arrayLivre = oLivres;
        this.init();
    }

    init() {
        this.affichage();
    }


/*     Littérature
Art de vivre
BD, Jeunesse, Humour
Culture et société
Loisirs, Tourisme, Nature
Savoir et science
 */

    affichage() {
    
        this.newArrayLivre = this.arrayLivre;


        switch (this._elFiltre) {

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

                        if(this._elFiltre == oLivres[i].categorie){
                            this.newArrayLivre.push(oLivres[i]);
                    }
                    this.affBase(this.newArrayLivre.length);
                }
                break;
        }
    }
    affBase(nbrAff) {
        while (this.tuile.firstChild) {
            this.tuile.removeChild(this.tuile.firstChild);
          }

        for (let i = 0; i < nbrAff; i++) {

            let dom = `
                <div class="encadre insertedContent" data-js-livre=${i}>
                    <img src="${this.newArrayLivre[i].image}" alt="">
                    <p>${this.newArrayLivre[i].categorie}</p>
                    <div class="grille--2__container">
                        <strong>${this.newArrayLivre[i].prix}<nbsp></nbsp>$</strong>
                        <div class="ajout-panier" data-js-ajouter-panier="${this.newArrayLivre[i].index}">Ajouter</div>
                    </div>
                </div>`;
            this.tuile.insertAdjacentHTML('beforeend', dom);
        }
    }
  
    
}