export default class Panier {
    /**
     * 
     * Affiche dans modal le LocalStorage[] reçu
     */
    //constructor(ContentLocalStorage){
    constructor(el){

        //console.log(el)

        this._el = el;


        //this.domAjoutAuPanier = document.querySelectorAll('[data-js-ajouter-panier]');
        //this.objPanier = ContentLocalStorage;
        //console.log(this.objPanier);
        //// Ajouter la class panier_contenu pour le rendre vert
        this.init()
    }
    
        init() {

            this._el.addEventListener('click', function() {
                console.log('click');
            })

            // gestion du clic
            //      afficher ou cacher le modal avec les infos du localStorage

            /**
             * Écouteur sur chacun des btn 'Ajouter'
             * 
             */
                /*
                this.domAjoutAuPanier.forEach(function(btnAjoutPanier) {
                btnAjoutPanier.addEventListener('click', function(pushToPanier) {
                     let index = pushToPanier.currentTarget.dataset.jsAjouterPanier;
    
 //ICICICIC                   // Changer oLivres pour le array de la bibliothèque ???
                     let obj = {titre: oLivres[index].titre, prix: oLivres[index].prix};
                     storageLocal.addToArrayLivre = obj;
                     storageLocal.addToLocalStorage = storageLocal.arrayLivre;
    
    
                     
                     localStorage.setItem(`contenuPanier`, JSON.stringify(livreDansPanier));
                     //storageIn(index);
                     
    
    
                 });
            })
            */
        }
    
    
    
        /**
         * Lance les écouteurs d'événement sur les tuiles après chaque affichage.
         */
        get listenAjoutPanier() {
            this.domAjoutAuPanier.forEach(function(btnAjoutPanier) { 
            
                btnAjoutPanier.addEventListener('click', function(pushToPanier) {
                
                    console.log(pushToPanier.currentTarget.dataset.jsAjouterPanier);
                });
            })
        }
}