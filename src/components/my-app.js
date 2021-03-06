import { LitElement, html } from "lit-element";
import { styles } from "../styles/my.app";
import { DataManagerGet } from "./DataManagers/data-manager-get";
import { DataManagerPost } from "./DataManagers/data-manager-post";
import { DataManagerDelete } from "./DataManagers/data-manager-delete";
import "./modal-edit";
import "./what-thinking";
import "./nav-app";
import "./list-publics";

export class MyApp extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      user: { type: Object },
      publications: { type: Array },
      updatePublic: { type: Object },
      modal: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.user = {
      name: "Sergio",
      lastName: "Cuevas",
      avatar: "/src/assets/img1.jpg",
    };
    this.publications = [];
    this.updatePublic = {};
    this.modal = true;

  }

  firstUpdated() {
    this.callService();
  }

  render() {
    return html`
      <h1>Proyecto SitDigital</h1>
      <div class="wrapper-app">
        <what-thinking
          @send-post="${this.updateList}"
          class="what-t"
          .user="${this.user}"
        ></what-thinking>
        <nav-app class="nav-a" .user="${this.user}"></nav-app>
        <list-publics
          @send-delete="${this.deletePublication}"
          class="list-p"
          .listPublications="${this.publications}"
        ></list-publics>
      </div>
      <modal-edit></modal-edit>
    `;
  }

  //Metodo que realiza una peticion de tipo GET y manda la informacion
  //al arreglo de las publicaciones
  callService() {
    let datos = new DataManagerGet();
    datos.generateRequest();
    datos.addEventListener("data-api", (e) => {
      this.publications = e.detail.data;
    });
  }

  //Metodo que realiza una peticion de tipo POST al disparar el evento SendPost
  updateList(e) {
    let post = new DataManagerPost();
    post.body = JSON.stringify(e.detail.publication);
    post.generateRequest().then(() => {
      this.callService();
    });
  }

  deletePublication(e){
    let delet = new DataManagerDelete();
    delet.id = e.detail.idPub;
    delet.generateRequest().then(() =>{
      this.callService();
    })
  }

  // updatePublic(e) {
  //   console.log(e.detail);
  // }

}
customElements.define("my-app", MyApp);
