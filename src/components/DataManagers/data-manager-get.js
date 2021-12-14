import { LitElement } from 'lit-element';

export class DataManagerGet extends LitElement {

    static get properties(){
        return{
            url: {type:String}
        };
    };

    constructor(){
        super();
        this.url = 'http://localhost:3000/publications';
    }

    _setData(data){
        this.dispatchEvent(new CustomEvent('data-api', {
            detail: { data },
            bubbles: true,
            composed: true
        }));
    }

    generateRequest(){
        fetch(this.url)
        .then(response => response.json())
        .then(data => this._setData(data))
        .catch(error => {
            console.log(error);
        })
        
    }
}
customElements.define('data-manager-get', DataManagerGet);