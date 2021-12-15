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

    //Metodo que envia los datos de una peticion GET por medio de un CustomEvent en su detail 
    _setData(data){
        this.dispatchEvent(new CustomEvent('data-api', {
            detail: { data },
            bubbles: true,
            composed: true
        }));
    }

    //Metodo que genera una peticion de tipo GET 
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