import {oLivres} from './oLivres.js';
import Livre from './Livre.js';
export default class Bibliotheque {

    constructor(el, base) {
        this._el = el; 
        this._filtre = base;
        this._filtreActuel;
        this._elsFiltre = this._el.querySelectorAll('[data-js-filtre]');
        this.tuile = document.querySelector('[data-js-tuile]');
        this._elLivres = this._el.querySelector('[data-js-livres]');
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
            this._elsFiltre[i].classList.toggle('filtre--selectionne', false);

            this._elsFiltre[i].addEventListener('click', function(filtreChoisi){
                this.EnleverStyleFiltre();
                // this.filtreActuel.classListAdd('filtre--selectionne');
                this.filtreActuel = this._elsFiltre[i];
                this.filtreActuel.classList.toggle('filtre--selectionne',true);



                //this.filtreActuel.classList.add('filtre--selectionne');
                this._filtre = filtreChoisi.currentTarget.dataset.jsFiltre;
                this.affichage();
                
            }.bind(this));         
        }
    }

    EnleverStyleFiltre() {
        for (let i = 0, l = this._elsFiltre.length; i < l; i++) {
            this._elsFiltre[i].classList.toggle('filtre--selectionne', false);
        }
    }

    affichage() {
        //this._filtreActuel.classList.add('filtre--clicked');
        this.newArrayLivre = this.arrayLivre;
        

        switch (this._filtre) {
            case 'base':
                this.affBase('tous', 12);
                break;

            case 'Tous':
                this.affBase('tous');
                break;

            case 'Nouveautés':
                this.affBase('Nouveautés');
                break;

            case 'Littérature':
                this.affBase('Littérature');
                break;

            case 'Art de vivre':
                this.affBase('Art de vivre');
            break;

            case 'BD, Jeunesse, Humour':
                this.affBase('Art de vivre');
            break;

            case 'Culture et société':
                this.affBase('Art de vivre');
            break;
            
            case 'Loisirs, Tourisme, Nature':
                this.affBase('Art de vivre');
            break;

            case 'Savoir et science':
                this.affBase('Art de vivre');
            break;
                        
            default:
                this.affBase(this._filtre);
            break;
        }
    }


    affBase(filtre, nbrAff = oLivres.length) {

        this._elLivres.innerHTML = '';
        for (let i = 0; i < nbrAff; i++) {

            // structures condition selon si filtre ou nouveauté
            if(this._filtre == oLivres[i].categorie || 
                this._filtre == 'Nouveautés' && oLivres[i].nouveaute == true ||
                this._filtre == 'Tous' || nbrAff == 12) {

                let dom = `
                    <div class="encadre insertedContent livre " data-js-livre=${i}>
                        <img class="livre__img" data-js-livre=${i} src="${oLivres[i].image}" alt="">
                        <p>${oLivres[i].categorie}</p>
                        <div class="grille--2__container">
                            <strong>${oLivres[i].prix}<nbsp></nbsp>$</strong>
                            <div class="ajout-panier" data-js-ajouter-panier="${i}">Ajouter</div>
                        </div>
                    </div>`;
                this._elLivres.insertAdjacentHTML('beforeend', dom);
                
                
                new Livre(this._elLivres.lastElementChild);
            }


        }
    }

    
    get newLivreArray() {
        return this.newArrayLivre;
    }
    
}


