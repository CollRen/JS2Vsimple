import Bibliotheque from "./Bibliotheque.js";

export default class Livre {

    constructor(_el) {
        this._el = _el;
        this.modalDom = document.querySelector('[data-js-modal]');
        //console.log(this.modalDom);
        this.init();
    }

    init() {

        this._el.addEventListener('click', function(onClick) {



        });
        //console.log(Bibliotheque->newArrayLivreGet);
    }


    
}