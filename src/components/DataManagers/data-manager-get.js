import { LitElement } from "lit-element";

export class DataManagerGet extends LitElement {
  static get properties() {
    return {
      url: { type: String },
    };
  }

  constructor() {
    super();
    this.url = "http://localhost:3000/publications";
  }

  //Metodo que da formato a los datos traidos de la peticion GET,
  //se retorna un arreglo con publicaciones en el formato deseado
  formatData(data = []) {
    let dataForm = [];
    data.map((el) => {
      let pub = {
        id: el.id,
        user: {
          name: el.user.name,
          avatar: el.user.avatar,
        },
        content: el.content,
        time: `${el.time.hours}:${this.formatMinutes(el.time.minutes)} h`,
      };
      dataForm.push(pub);
    });
    return dataForm;
  }

  formatMinutes(min) {
    let realMinutes = min <= 9 ? "0" + min : min;
    return realMinutes;
  }

  //Metodo que envia los datos de una peticion GET por medio de un CustomEvent en su detail
  _setData(data) {
    this.dispatchEvent(
      new CustomEvent("data-api", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  //Metodo que genera una peticion de tipo GET
  generateRequest() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => this._setData(this.formatData(data)))
      .catch((error) => {
        console.log(error);
      });
  }
}
customElements.define("data-manager-get", DataManagerGet);
