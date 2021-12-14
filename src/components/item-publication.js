import { LitElement, html, css } from 'lit-element';
import { styles } from '../styles/item-publication';

export class ItemPublication extends LitElement {

    
    static get styles(){
        return[
            styles
        ]
    };

    static get properties(){
        return {
            publication:{type:Object}
        }
    }

    constructor(){
        super();
        this.publication = {};
    }

    render() {
        return html`
            <div class="container-publication">
                <div class="header-publication">
                    <img class="avatar" src="${this.publication.user.avatar}"/>
                    <p class="NameUser">${this.publication.user.name}</p>
                    <p class="time">${this.publication.time}</p>

                </div>
                <div class="body-publication">
                    <p>${this.publication.content}</p>
                </div>
            </div>
        
        `;
    }
}
customElements.define('item-publication', ItemPublication);