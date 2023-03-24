enum NavbarAttributes {
    iconexplore = 'iconexplore',
    iconlike = 'iconlike',
    iconhome = 'iconhome',
    iconlibrary = 'iconlibrary',
    
}

class Navbar extends HTMLElement {
    iconexplore = '';
    iconlike = '';
    iconhome = '';
    iconlibrary = '';

    constructor(){
        super();
        this.attachShadow({ mode : 'open'})
    }

    static get observedAttributes(): NavbarAttributes[] {
        return Object.keys(NavbarAttributes) as NavbarAttributes[];
    }

    attributeChangedCallback( prop: NavbarAttributes, _: string, newValue: string): void{
        this[prop] = newValue;
        this.render();
    }

    connectedCallback(): void {
        this.render();
    }

    render(): void {
        if(!this.shadowRoot) 
        return;
        this.shadowRoot.innerHTML += `
        <img src="${this.iconexplore}">
        <img src="${this.iconlike}">
        <img src="${this.iconhome}">
        <img src="${this.iconlibrary}">
        `;
    }
}

customElements.define("my-navbar", Navbar);
export default Navbar;