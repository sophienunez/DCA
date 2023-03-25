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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/navbar/Navbar.css">
        <section class="nav-bar">
            <img class="icon" src="${this.iconexplore}">
            <div class="right">
                <img class="icon" src="${this.iconlike}">
                <img class="icon" src="${this.iconhome}">
                <img class="icon" src="${this.iconlibrary}">
            </div>
        </section>
        `;
    }
}

customElements.define("my-navbar", Navbar);
export default Navbar;