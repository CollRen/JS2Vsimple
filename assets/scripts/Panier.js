export default class Panier {

    constructor(elPanier){
        this._elPanier = elPanier;
        console.log(this._elPanier);
        this.domAjoutAuPanier = document.querySelectorAll('[data-js-ajouter-panier]');
        console.log(this.domAjoutAuPanier);

        this.init();

    }

    init() {
        this._elPanier.addEventListener('click', function(e) {
            this.afficherLocalStorage();
        }.bind(this))



    }

    afficherLocalStorage() {
        const localStorage = localStorage.getItem("myCat");
        console.log('GO');
    }
    // localStorage.setItem('arrayPanier', JSON.stringify(objInsert));



/**
 * 
 * Comportement de la class Panier:
 * Les écouteurs de 'Ajouter' devrait être dans la bibliothèque
 *      Auclick de 'Ajouter' => envoyer au localStorage
 * 
 * Au clic du SVG Panier
 *      Afficher le contenu du localStorage
 *      Donc on reçoit l'élément div panier
 *      On récupère le localStorage
 *      On créer la loop
 *      On injecte à chaque tour de boucle les infos
 *      
 * 
 * /








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
/*         this.domAjoutAuPanier.forEach(function(btnAjoutPanier) {

            btnAjoutPanier.addEventListener('click', function(pushToPanier) {
                let index = pushToPanier.currentTarget.dataset.jsAjouterPanier;
                console.log(index); */
                //new Livre(index);

            //Changer oLivres pour le array de la bibliothèque ???
/*             let obj = {titre: oLivres[index].titre, prix: oLivres[index].prix};
            storageLocal.addToArrayLivre = obj;
            storageLocal.addToLocalStorage = storageLocal.arrayLivre;
  
            localStorage.setItem(`contenuPanier`, JSON.stringify(livreDansPanier));  */    
            
        
}