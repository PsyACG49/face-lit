import { LitElement } from "lit-element";

export class DataManagerPost extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
      headers: { type: Object },
      body: { type: String },
    };
  }

  constructor() {
    super();
    this.url = "http://localhost:3000/publications";
    this.method = "POST";
    this.headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
    this.body = "";
  }

  //Metodo que genera un peticion de tipo POST
  generateRequest() {
    let options = {
      method: this.method,
      headers: this.headers,
      body: this.body,
    };
    return fetch(this.url, options)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  }
}
customElements.define("data-manager-post", DataManagerPost);
