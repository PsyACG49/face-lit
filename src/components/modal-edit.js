import { LitElement, html, css } from "lit";
import { styles } from "../styles/modal-edit";

export class ModalEdit extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      info: { type: Array },
      type: { type: String },
    };
  }

  render() {
    return html`
      <div class="modal-container">
        <div class="modal">
          <p class="close">x</p>
          <p>Escribe el nuevo contenido</p>
          <form>
            <textarea>hola como estas</textarea>
          </form>
        </div>
      </div>
    `;
  }
}
customElements.define("modal-edit", ModalEdit);
