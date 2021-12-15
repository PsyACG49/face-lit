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
            lastName: "Cuevas",
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
                <what-thinking @send-post="${this.updateList}" class="what-t" .user="${this.user}"></what-thinking>
                <nav-app class="nav-a" .user="${this.user}"></nav-app>
                <list-publics class="list-p" .listPublications="${this.publications}"></list-publics>
            </div>
        `;
    };

    //Metodo que realiza una peticion de tipo GET y manda la informacion
    //al arreglo de las publicaciones
    callService(){
        let datos = new DataManagerGet();
        datos.generateRequest()
        datos.addEventListener('data-api', (data) => {
            this.publications = this.formatData(data.detail.data)
        });
    }

    //Metodo que da formato a los datos traidos de la peticion GET, 
    //se retorna un arreglo con publicaciones en el formato deseado 
    formatData(data = []){
        let dataForm = []
        data.map( el =>{
            let pub = {
                user: {
                    name: el.user.name,
                    avatar: el.user.avatar
                  },
                  content: el.content,
                  time: `${el.time.hours}:${el.time.minutes} h`
            }
            dataForm.push(pub);
        })
        return dataForm;
    }

    //Metodo que realiza una peticion de tipo POST al disparar el evento SendPost
    updateList(e){
        let post = new DataManagerPost()
        post.body =  JSON.stringify(e.detail.publication);
        post.generateRequest().then(() => {
            this.callService()
        })
    }

    
}
customElements.define('my-app', MyApp);