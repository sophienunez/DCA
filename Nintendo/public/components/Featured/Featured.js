export var FeaturedAttributes;
(function (FeaturedAttributes) {
    FeaturedAttributes["mario"] = "mario";
})(FeaturedAttributes || (FeaturedAttributes = {}));
class Featured extends HTMLElement {
    constructor() {
        super();
        this.mario = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(FeaturedAttributes);
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
        <img src="${this.mario}">
        `;
    }
}
customElements.define("my-featured", Featured);
export default Featured;
