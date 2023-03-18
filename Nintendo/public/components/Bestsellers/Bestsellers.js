export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["date"] = "date";
    Attribute["price"] = "price";
    Attribute["sale"] = "sale";
})(Attribute || (Attribute = {}));
class Bestsellers extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
    attributeChangedCallback(propName, _, newValue) {
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
