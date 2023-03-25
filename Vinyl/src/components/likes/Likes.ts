export enum likesAttribute {
    "songname" = "songname",
    "artistname" = "artistname",
    "albumimg" = "albumimg",
}

class Likes extends HTMLElement {
    songname?: string;
    artistname?: string;
    albumimg?: string;

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    static get observedAttributes() {
        const attrs: Record<likesAttribute, null> = {
            songname: null,
            artistname: null,
            albumimg: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: likesAttribute, _: string | undefined, newValue: string | undefined){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(!this.shadowRoot)
        return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/likes/Likes.css">
        <section id="card">
            <img src="${this.albumimg}"></img>
        </section>
        `;
    }
}

customElements.define("my-likes", Likes);
export default Likes;