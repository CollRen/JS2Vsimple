import Bibliotheque from "./Bibliotheque.js";
import { oLivres } from "./oLivres.js";
import biblioLocalStorage from "./main.js";

export default class Livre {
  constructor(_el) {
    this._el = _el;
    this._index = this._el.dataset.jsLivre;
    this._eladdToPanier = this._el.querySelector("[data-js-ajouter-panier]");
    this._elImage = this._el.querySelector(".livre__img");
    this._elModal = document.querySelector("[data-js-modal]");
    this.modalOpen;
    this.currentLocalStorage = localStorage.getItem("Panier");
    this.bookInLS = false;

    this.init();
  }

  init() {
    let userData = JSON.parse(localStorage.getItem("Panier"));

    if (this.currentLocalStorage && biblioLocalStorage.length == 0) {
      this.ajouterContenuLsToArray(userData);
    }

    /**
     * Au click, ajouter les livres au LocalStorage
     */
    this._eladdToPanier.addEventListener(
      "click",
      function (onClick) {
        let index = onClick.currentTarget.dataset.jsAjouterPanier;
        let titre = oLivres[index].titre;
        let prix = oLivres[index].prix;
        this.currentLocalStorage = localStorage.getItem("Panier");
        if (this.currentLocalStorage) {
          this.bookInLS = true;
          this.addToLocalStorage(index);
        } else {
          const panier = document.querySelector(".panier");
          panier.classList.add("panier_contenu");
          this.addToLocalStorage(index);
        }
      }.bind(this)
    );

    /**
     * Affichage du modal 'détail livre' au click
     */
    const body = document.querySelector(".body");
    this._elImage.addEventListener(
      "click",
      function (e) {
        //let y = e.currentTarget.dataset.jsLivre;
        let dom = `
                <div class="modal" data-js-modal>
                    <div class="livre__detail">
                        
                        <img src="${oLivres[this._index].image}" alt="">
                        
                        <div class="livre__detail--right">
                        
                        <p>Titre: ${oLivres[this._index].titre}</p>
                        
                        <p><small>Auteur: </small>${
                          oLivres[this._index].auteur
                        }</p>
                        
                        <p><small>Éditeur: </small>${
                          oLivres[this._index].editeur
                        }</p>
                        
                        <p><small>Pages: </small>${
                          oLivres[this._index].pages
                        }</p>
                        
                        <p>${oLivres[this._index].description}</p>
                        </div>
                        <div class="livre__detail--x">X</div>
                    </div>
                </div>
                `;
        //this._elModal.insertAdjacentHTML('afterbegin', dom);
        document.body.insertAdjacentHTML("afterbegin", dom);

        let elModal = document.querySelector("[data-js-modal]");
        elModal.addEventListener(
          "click",
          function () {
            this.#fermetureModal(elModal);
          }.bind(this)
        );
      }.bind(this)
    );
  }

  addToLocalStorage(index) {
    let titre = oLivres[index].titre;
    let prix = oLivres[index].prix;
    let objInsert = { index, titre, prix };

    if (!this.currentLocalStorage) {
      biblioLocalStorage.push(objInsert);
      localStorage.setItem("Panier", JSON.stringify(biblioLocalStorage));
      this.currentLocalStorage = localStorage.getItem("Panier");
    } else {
      let userData = JSON.parse(localStorage.getItem("Panier"));
      let isLivreInLs = false;
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].index == index) {
          isLivreInLs = true;
        }
      }
      if (!isLivreInLs) {
        biblioLocalStorage.push(objInsert);
        localStorage.clear();
        localStorage.setItem("Panier", JSON.stringify(biblioLocalStorage));
      }
    }
  }

  #fermetureModal(elModal) {
    elModal.remove();
  }

  ajouterContenuLsToArray(userData) {
    for (let i = 0; i < userData.length; i++) {
      let index = userData[i].index;
      let titre = userData[i].titre;
      let prix = userData[i].prix;
      let objInsert = { index, titre, prix };
      biblioLocalStorage.push(objInsert);
    }
  }
}
