import "./Card/Card"

class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
        }
        render(){
        
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/styles.css">
                <my-card></my-card>
                `;
            }
        }
    }

customElements.define("app-container", AppContainer);