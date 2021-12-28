import { LitElement, html, css } from "lit-element";
import { styles } from "../styles/item-list";

export class ItemList extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      icon: { type: String },
      img: { type: String },
      inText: { type: String },
    };
  }

  constructor() {
    super();
    this.inText = "";
    this.img = "";
    this.icon = "";
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
      />
      <div class="item-container">
        ${this._findIcono()}
        <p>${this.inText}</p>
      </div>
    `;
  }

  _findIcono() {
    return html` ${this.icon
      ? html`<span class="material-icons-outlined">${this.icon}</span>`
      : html`<img class="avatar" src="${this.img}" />`}`;
  }
}
customElements.define("item-list", ItemList);
