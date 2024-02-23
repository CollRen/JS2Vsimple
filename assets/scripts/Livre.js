import Bibliotheque from "./Bibliotheque.js";
import { oLivres } from "./oLivres.js";

export default class Livre {

    constructor(_el) {
        this._el = _el;
        this._index = this._el.dataset.jsLivre;
        this._eladdToPanier = this._el.querySelector('[data-js-ajouter-panier]');
        this._elImage = this._el.querySelector('.livre__img');
        this._elModal = document.querySelector('[data-js-modal]');
        this.modalOpen;
        this.currentLocalStorage = localStorage.getItem('Panier');

       
        this.init();
    }

    init() {
        
        /**
         * Au click, ajouter les livres au LocalStorage 
         */
        this._eladdToPanier.addEventListener('click', function(onClick) {
            let index = onClick.currentTarget.dataset.jsAjouterPanier;
            let titre = oLivres[index].titre;
            let prix = oLivres[index].prix;

            this.currentLocalStorage = localStorage.getItem('Panier');

            if(!this.currentLocalStorage) {
                this.addToLocalStorage(index);
            } else {     
                this.addToLocalStorage(index);
            }



        }.bind(this));




        /**
         * Affichage du modal 'détail livre' au click
         */
        const body = document.querySelector('.body');
        this._elImage.addEventListener('click', function(e) {

                
                //let y = e.currentTarget.dataset.jsLivre;
                let dom = 
                `
                <div class="modal" data-js-modal>
                    <div class="livre__detail">
                        <br>
                        <img src="${oLivres[this._index].image}" alt="">
                        <br>
                        <div class="livre__detail--right">
                        <br>
                        <p>Titre: ${oLivres[this._index].titre}</p>
                        <br>
                        <p><small>Auteur: </small>${oLivres[this._index].auteur}</p>
                        <br>
                        <p><small>Éditeur: </small>${oLivres[this._index].editeur}</p>
                        <br>
                        <p><small>Pages: </small>${oLivres[this._index].pages}</p>
                        <br>
                        <p>${oLivres[this._index].description}</p>
                        </div>
                        <div class="livre__detail--x">X</div>
                    </div>
                </div>
                `;
                //this._elModal.insertAdjacentHTML('afterbegin', dom);
                document.body.insertAdjacentHTML('afterbegin', dom);
                //this.faireUnTest();

                let elModal = document.querySelector('[data-js-modal]');
                elModal.addEventListener('click', function() {
                    this.fermetureModal(elModal);
                }.bind(this));


            }.bind(this));
    }

    addToLocalStorage(index) {
        if(!this.currentLocalStorage) {
            let livreAjouter = [JSON.stringify(index)];
            localStorage.setItem('Panier', livreAjouter);
        } else {

            let currentLs = [this.currentLocalStorage, index];
            localStorage.setItem('Panier', currentLs);

            
        }

    }

    fermetureModal(elModal) {
        elModal.remove();
    }



    faireUnTest() {
        this.modalOpen = this._elModal.querthis._indexSelector('.livre__detail');
        window.addEventListener('click', function() {
        })

   }



    }




    
