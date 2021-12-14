import { LitElement, html } from 'lit-element';
import { styles } from '../styles/my.app';
import { DataManagerGet } from './DataManagers/data-manager-get';
import { DataManagerPost } from './DataManagers/data-manager-post';
import './what-thinking';
import './nav-app';
import './list-publics';


export class MyApp extends LitElement {

    static get styles(){
        return[
            styles
        ]
    };
    
    static get properties() {
        return{
            user: {type:Object},
            publications: {type:Array}
        }
    }

    constructor(){
        super()
        this.user = {
            name: "Sergio",
            avatar:"/src/assets/img1.jpg"
        }
        this.publications = [];
    }

    firstUpdated(){
        this.callService();
    }


    render(){
        return html`
            <h1>Proyecto SitDigital</h1>
            <div class="wrapper-app">
                <what-thinking @SendPost="${this.updateList}" class="what-t" .user="${this.user}"></what-thinking>
                <nav-app class="nav-a" .user="${this.user}"></nav-app>
                <list-publics class="list-p" .listPublications="${this.publications}"></list-publics>
            </div>
        `;
    };

    callService(){
        let datos = new DataManagerGet();
        datos.generateRequest()
        datos.addEventListener('data-api', (data) => {
            this.publications = data.detail.data;
        });
    }

    updateList(e){
        let post = new DataManagerPost()
        post.options.body =  JSON.stringify(e.detail.publication);
        post.generateRequest().then(() => {
            this.callService()
        })
    }

    
}
customElements.define('my-app', MyApp);