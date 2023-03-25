export enum suggestionsAttribute {
    "songname" = "songname",
    "artistname" = "artistname",
    "albumimg" = "albumimg",
}

class Suggestions extends HTMLElement {
    songname?: string;
    artistname?: string;
    albumimg?: string;

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    static get observedAttributes() {
        const attrs: Record<suggestionsAttribute, null> = {
            songname: null,
            artistname: null,
            albumimg: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: suggestionsAttribute, _: string | undefined, newValue: string | undefined){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(!this.shadowRoot)
        return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/suggestions/Suggestions.css">
        <section id="card">
            <img src="${this.albumimg}"></img>
        </section>
        `;
    }
}

customElements.define("my-suggestions", Suggestions);
export default Suggestions;