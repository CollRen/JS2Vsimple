export default class Panier {

    constructor(elPanier){
        this._elPanier = elPanier;
        console.log(this._elPanier);
        this.domAjoutAuPanier = document.querySelectorAll('[data-js-ajouter-panier]');
        /*
Exemple: analyser (parse) la variable structurée avant
sa lecture afin d’accéder à ses différentes valeurs. Pour ce faire, il faudra utiliser la
méthode JSON.parse(sessionStorage.clef) ou JSON.parse(localStorage.clef)
*/

/*
let datas = JSON.parse(sessionStorage.objetCle);
}




        //this.domAjoutAuPanier = document.querySelectorAll('[data-js-ajouter-panier]');
        //this.objPanier = ContentLocalStorage;
        //console.log(this.objPanier);

        //// Ajouter la class panier_contenu pour le rendre vert
        this.init();
    }
    
    // gestion du clic
    //afficher ou cacher le modal avec les infos du localStorage
    init() {
        /**
         * Écouteur sur chacun des btn 'Ajouter'
         * 
         */
        this.domAjoutAuPanier.forEach(function(btnAjoutPanier) {

            btnAjoutPanier.addEventListener('click', function(pushToPanier) {
                let index = pushToPanier.currentTarget.dataset.jsAjouterPanier;
                console.log(index);
                //new Livre(index);

            //Changer oLivres pour le array de la bibliothèque ???
/*             let obj = {titre: oLivres[index].titre, prix: oLivres[index].prix};
            storageLocal.addToArrayLivre = obj;
            storageLocal.addToLocalStorage = storageLocal.arrayLivre;
  
            localStorage.setItem(`contenuPanier`, JSON.stringify(livreDansPanier));  */    
            });
        })  
    }
}
