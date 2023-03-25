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
            <link rel="stylesheet" href="../src/components/player/Player.css">
            <section>
                <span>
                    <p>continue listening</p>
                    <p>${this.artistname}</p>
                </span>
                <img class="cover" src="${this.albumimg}"></img>
                <h3>${this.songname}</h3>
            </section>
        `;
    }
}

customElements.define("my-player", Player);
export default Player;