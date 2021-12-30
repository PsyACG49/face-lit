import { LitElement, html, css } from "lit";
import { styles } from "../styles/modal-edit";

export class ModalEdit extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      info: { type: Object },
      type: { type: String },
      close: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.info = {
      content: "",
    };
    this.type = "";
    this.close = true;
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
      />
      <div class="${this.showModal()}">
        <div class="modal">
          <p class="close" @click="${this.closeModal}">x</p>
          <p class="text-modal">Escribe el nuevo contenido</p>
          <form>
            <textarea rows="10" cols="30" .value="${this.info.content}" class="T-area"></textarea>
          </form>
          <span class="material-icons-outlined save-change"> save </span>
        </div>
      </div>
    `;
  }

  showModal() {
    return !this.close ? "modal-container" : "modal-cont-close";
  }

  closeModal() {
    this.close = !this.close;
  }
}

customElements.define("modal-edit", ModalEdit);
