import { LitElement } from 'lit-element';

export class DataManagerPost extends LitElement {
    static get properties(){
        return{
            url: {type: String},
            options: {type: Object}
        };
    };

    constructor(){
        super();
        this.url = 'http://localhost:3000/publications';
        this.options = {
            method:"POST",
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:''
        }
    }

    generateRequest(){
        return fetch(this.url, this.options)
        .then((response) => response.json())
        .catch(error => {
            console.log(error);
        })
    };


}
customElements.define('data-manager-post', DataManagerPost);