import { LitElement, html, css } from 'lit-element';
import { styles } from '../styles/nav-app';
import { itemsNav } from '../utils/contenidoNav';
import './item-list';

export class NavApp extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      user: { type: Object },
      itemsNav: { type: Array },
    };
  }

  constructor() {
    super();
    this.user = {};
    this.itemsNav = itemsNav;
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
      />
      <div class="nav-container">
        <ul>
          <li class="nav-item">
            <item-list
              .inText="${this.user.name}"
              .img="${this.user.avatar}"
            ></item-list>
          </li>
          ${this.getItems()}
        </ul>
      </div>
    `;
  }

  getItems() {
    return html`
      ${this.itemsNav.map(
        (item) => html`
          <li class="nav-item">
            <item-list inText="${item.text}" icon="${item.icon}"></item-list>
          </li>
        `
      )}
    `;
  }
}
customElements.define('nav-app', NavApp);