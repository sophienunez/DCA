import {getCharacters} from "../api";
import {characters} from "./types/types";

export default class Card extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        const characters = await getCharacters();
        this.render(characters);
    }

    render(characters: Array<characters>){
        if(!this.shadowRoot) return; {
            const dataCharacters = characters.map(({name, image, gender, species, status}) => `
            <link rel="stylesheet" href="../src/styles.css">
            <div class="card">
             <img src="${image}" alt="character image">
             <div class="card-content">
               <p class="name">${name}</p>
               <p class="gender">${gender}</p>
               <p class="species">${species}</p>
               <p class="status">${status}</p>
             </div>
            </div>
            `);

            this.shadowRoot.innerHTML = `
            ${dataCharacters.join("")}
            `;
        }
    }
}

customElements.define("my-card", Card);