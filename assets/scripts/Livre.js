export default class Livre {

    constructor(_el) {
        this._el = _el;
        this.init();
    }

    init() {
        this._el.addEventListener('click', function(onClick) {
            console.log(onClick.currentTarget.dataset.jsLivre);

        });

    }


    
}