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
            placeHolder: {type:String},
            iconAux:{type:String}
        }
    }

    constructor(){
        super();
        this.user = {};
        this.placeHolder = "What are you thinking, ";
        this.iconAux = "account_circle"; 
    }


    render() {
        return html`
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined">
            <div class="comp-container">
                ${this.getImage()}    
                <form class="comp-form" @submit=${this.getDatos}>
                    <input class="comp-form-input" type="text" placeholder="¿${this.placeHolder}${this.user.name}?"/>
                </form>
            </div>
        `;
    }

    //Metodo que valida que se tenda una avatar, de lo contrario mostrara un icono de usuario
    getImage(){
        return html`
            ${this.user.avatar ? 
            html`<img class="comp-img" src="${this.user.avatar}">` :
            html`<span class="material-icons-outlined comp-avatar">${this.iconAux}</span>`
            }`
    }

    //Metodo que trae la informacion del input y el usuario para crear una publicacion,
    //este metodo se ejecuta al disparar el evento @submit
    getDatos(e){
        e.preventDefault();
        let time = new Date();
        let publication = {
            user: this.user,
            content: e.target[0].value,
            time: {
                hours: time.getHours(),
                minutes: time.getMinutes()
            }
        }
        this.sendData(publication);
        e.target[0].value = "";
    
    }

    //Metodo que dispara un evento @send-post, que al momento de ser propagado
    //lleva en el detail la informacion de la publicacion 
    sendData(publication){
        this.dispatchEvent(new CustomEvent('send-post', {
            detail: { publication },
            bubbles: true,
            composed: true
          }))
    }


}
customElements.define('what-thinking', WhatThinking);