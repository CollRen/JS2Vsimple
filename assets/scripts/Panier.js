import biblioLocalStorage from "./main.js";
export default class Panier {
  constructor(elPanier) {
    this._elPanier = elPanier;
    this._elModalPanier = document.querySelector("[data-js-modal-panier]");

    this.init();
  }

  init() {
    this._elPanier.addEventListener(
      "click",
      function (e) {
        this.afficherLocalStorage();
      }.bind(this)
    );
  }


  afficherLocalStorage() {
    let total = 0;

    let dom = `
    <div class="el-modal-panier csscontent__modal_panier--ouvert">    
        <table>
            <tr>
                <th>Livre</th>
                <th>Prix</th>
            </tr>`;

    for (let i = 0; i < biblioLocalStorage.length; i++) {
      total = total += biblioLocalStorage[i].prix;
      console.log(biblioLocalStorage[i].titre);

      dom += `
                <tr>
                    <td>${biblioLocalStorage[i].titre}</td>
                    <td>${biblioLocalStorage[i].prix}$</td>
                </tr>
               
            `;
    }

    dom += ` <tr>
        <td>Total</td>
        <td><strong>${total}<small>$</small></strong></td>
    </tr>
</table> 
</div>`;

    this._elModalPanier.innerHTML = dom;
    let elModalPanier = document.querySelector(".el-modal-panier");

    this._elModalPanier.addEventListener("click", function (e) {
      elModalPanier.remove();
    });
  }
}
