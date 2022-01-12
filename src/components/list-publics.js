import { LitElement, html } from "lit-element";
import { styles } from "../styles/list-publics";
import "./item-publication";

export class ListPublics extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      listPublications: { type: Array },
    };
  }

  constructor() {
    super();
    this.listPublications = [];
  }

  render() {
    return html`
      <div class="container-publications">${this.showPublications()}</div>
    `;
  }

  //Metodo que pinta las publicaciones que se reciben de la prop publications
  showPublications() {
    if (this.listPublications) {
      return html`
        ${this.listPublications.map(
          (pub) => html`
            <item-publication .publication="${pub}"></item-publication>
          `
        )}
      `;
    }
  }
}
customElements.define("list-publics", ListPublics);
