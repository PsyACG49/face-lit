import { LitElement, html, css } from 'lit-element';
import { styles } from '../styles/what-thinking';

export class WhatThinking extends LitElement {

    static get styles() {
        return[
            styles
        ]
    }

    static get properties(){
        return{
            user: {type:Object},
            inText: {type:String}
        }
    }

    constructor(){
        super();
        this.user = {};
    }


    render() {
        return html`
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined">
            <div class="comp-container">
                ${this.getImage()}    
                <form class="comp-form" @submit=${this.getDatos}>
                    <input class="comp-form-input" type="text" placeholder="¿What are you thinking, ${this.user.name}?"/>
                </form>
            </div>
        `;
    }

    getImage(){
        return html`
            ${this.user.avatar ? 
            html`<img class="comp-img" src="${this.user.avatar}">` :
            html`<span class="material-icons-outlined comp-avatar">account_circle</span>`
            }`
    }

    getDatos(e){
        e.preventDefault();
        let time = new Date();
        let publication = {
            user: this.user,
            content: e.target[0].value,
            time: `${time.getHours()}:${time.getMinutes()} h`
        }
        this.sendData(publication);
        e.target[0].value = "";
    
    }

    sendData(publication){
        this.dispatchEvent(new CustomEvent('SendPost', {
            detail: { publication },
            bubbles: true,
            composed: true
          }))
    }


}
customElements.define('what-thinking', WhatThinking);