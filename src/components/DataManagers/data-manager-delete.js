import { LitElement } from 'lit';

export class DataManagerDelete extends LitElement {
 static get properties() {
  return {
    id: { type: String },
    url: { type: String },
    method: { type: String },
    headers: { type: Object },
  };
 };

 constructor() {
   super();
   this.id = "",
   this.url = "http://localhost:3000/publications";
   this.method = "DELETE";
   this.headers = {
    "Content-type": "application/json; charset=UTF-8",
   };
 }

  generateRequest() {
   let options = {
    method: this.method,
    headers: this.headers,
   };
   return fetch(`${this.url}/${this.id}`, options)
   .then((res) => res.json())
 }
}
customElements.define('data-manager-delete', DataManagerDelete);
