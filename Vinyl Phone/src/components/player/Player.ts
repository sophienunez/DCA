export enum playerAttribute {
    "songname" = "songname",
    "artistname" = "artistname",
    "albumimg" = "albumimg",
}

class Player extends HTMLElement {
    songname?: string;
    artistname?: string;
    albumimg?: string;

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    static get observedAttributes() {
        const attrs: Record<playerAttribute, null> = {
            songname: null,
            artistname: null,
            albumimg: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: playerAttribute, _: string | undefined, newValue: string | undefined){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(!this.shadowRoot)
        return;
        this.shadowRoot.innerHTML = `
            <h2>${this.songname}</h2>
            <h2>${this.artistname}</h2>
            <img src="${this.albumimg}"></img>
        `;
    }
}

customElements.define("my-player", Player);
export default Player;