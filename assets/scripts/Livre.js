export default class Livre {

    constructor(_el) {
        this._el = _el;
        this.init();
    }

    init() {
        console.log(this._el);
    }
    
}