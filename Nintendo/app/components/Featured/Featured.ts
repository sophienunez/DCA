export enum FeaturedAttributes {
    mario = "mario"
}

class Featured extends HTMLElement {
    mario = '';

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes(): FeaturedAttributes[] {
        return Object.keys(FeaturedAttributes) as FeaturedAttributes[];
    }

    connectedCallback(){
        this.render();
    }
    
    attributeChangedCallback( prop: FeaturedAttributes, _: string, newValue: string): void{
        this[prop] = newValue;
        this.render();
    }

    render(): void{
        if(!this.shadowRoot)
        return;
        this.shadowRoot.innerHTML = `
        <img src="${this.mario}">
        `;
    }

}

customElements.define("my-featured", Featured);
export default Featured;