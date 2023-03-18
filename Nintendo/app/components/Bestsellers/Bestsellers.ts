export enum Attribute {
    "name" = "name",
    "date" = "date",
    "price" = "price",
    "sale" = "sale",
}

class Bestsellers extends HTMLElement {
    name?: string;
    date?: string;
    price?: number;
    sale?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
            date: null,
            price: null,
            sale: null,
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                case Attribute.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <p>${this.name}</p>
                <p>${this.date}</p>
                <p>${this.price}</p>
                <p>${this.sale}</p>
                `;
            }
        }
    }
    
customElements.define("my-bestsellers", Bestsellers);
export default Bestsellers;