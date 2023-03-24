enum profileAttributes {
    profileicon = 'profileicon',
    logo = 'logo',
}

class Profile extends HTMLElement {
    profileicon = '';
    logo = '';

    constructor(){
        super();
        this.attachShadow({ mode : 'open'})
    }

    static get observedAttributes(): profileAttributes[] {
        return Object.keys(profileAttributes) as profileAttributes[];
    }

    attributeChangedCallback(prop: profileAttributes, _: string, newValue: string): void {
        this[prop] = newValue;
    }

    connectedCallback(): void {
        this.render();
    }

    render(): void {
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        `;
    }
}

customElements.define("my-profile", Profile);
export default Profile;