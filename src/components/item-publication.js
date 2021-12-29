import { LitElement, html, css } from "lit-element";
import { styles } from "../styles/item-publication";

export class ItemPublication extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      publication: { type: Object },
    };
  }

  constructor() {
    super();
    this.publication = {};
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
      />
      <div class="container-publication">
        <div class="header-publication">
          <img class="avatar" src="${this.publication.user.avatar}" />
          <p class="NameUser">${this.publication.user.name}</p>
          <div class="header-p-time">
            <p class="time">${this.publication.time}</p>
            <span class="material-icons-outlined icon-world"> public </span>
          </div>
          <span class="material-icons-outlined icon-edit"> edit </span>
        </div>
        <div class="body-publication">
          <p>${this.publication.content}</p>
          <span
            class="material-icons-outlined icon-delete"
            @click=${this.sendDeletePub}
          >
            delete
          </span>
        </div>
      </div>
    `;
  }

  sendDeletePub() {
    let isdelete = confirm("¿Estas seguro de eliminar la publicacion?");
    let idPub = this.publication.id;
    if (isdelete) {
      this.dispatchEvent(
        new CustomEvent("send-delete", {
        detail: { idPub },
        bubbles: true,
        composed: true,
        })
      );
    }
  }
}
customElements.define("item-publication", ItemPublication);
