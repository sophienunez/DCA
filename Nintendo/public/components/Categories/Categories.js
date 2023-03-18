export var categoriesAttributes;
(function (categoriesAttributes) {
    categoriesAttributes["iconstore"] = "iconstore";
    categoriesAttributes["icondpad"] = "icondpad";
    categoriesAttributes["iconintendo"] = "iconintendo";
    categoriesAttributes["iconews"] = "iconews";
    categoriesAttributes["iconstar"] = "iconstar";
})(categoriesAttributes || (categoriesAttributes = {}));
class Categories extends HTMLElement {
    constructor() {
        super();
        this.iconstore = '';
        this.icondpad = '';
        this.iconintendo = '';
        this.iconews = '';
        this.iconstar = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(categoriesAttributes);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <img src="${this.iconstore}">
        <img src="${this.icondpad}">         
        <img src="${this.iconintendo}">         
        <img src="${this.iconews}">         
        <img src="${this.iconstar}">                  
        `;
    }
}
customElements.define("my-categories", Categories);
export default Categories;
