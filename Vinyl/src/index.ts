import "./components/export";
import {playerData} from "./data";
import {data} from "./data";
import Player, { playerAttribute } from "./components/player/Player";
import Suggestions, { suggestionsAttribute } from "./components/suggestions/Suggestions";
import Likes, { likesAttribute } from "./components/likes/Likes";

class AppContainer extends HTMLElement{
    suggestionsinfo: Suggestions[] = [];
    likesinfo: Likes[] = [];
    playerinfo: Player[] = [];

    constructor(){
        super();
        this.attachShadow({mode: 'open'})

        playerData.forEach((player) => {
            const Player = this.ownerDocument.createElement(
                "my-player"
            ) as Player;
            Player.setAttribute(playerAttribute.songname, player.songname);
            Player.setAttribute(playerAttribute.artistname, player.artistname);
            Player.setAttribute(playerAttribute.albumimg, player.albumimg);
            this.playerinfo.push(Player);
        });

        data.forEach((suggestions) =>{
            const Suggestions = this.ownerDocument.createElement(
                "my-suggestions"
            ) as Suggestions;
            Suggestions.setAttribute(suggestionsAttribute.songname, suggestions.songname);
            Suggestions.setAttribute(suggestionsAttribute.artistname, suggestions.artist.artistname);
            Suggestions.setAttribute(suggestionsAttribute.albumimg, suggestions.album.albumimg);
            this.suggestionsinfo.push(Suggestions);
        });

        data.forEach((likes) =>{
            const Likes = this.ownerDocument.createElement(
                "my-likes"
            ) as Likes;
            Likes.setAttribute(likesAttribute.songname, likes.songname);
            Likes.setAttribute(likesAttribute.artistname, likes.artist.artistname);
            Likes.setAttribute(likesAttribute.albumimg, likes.album.albumimg);
            this.likesinfo.push(Likes);
        });
        
    }
    connectedCallback(){
        this.render();
    }
    render() {
        if (!this.shadowRoot)
        return;
        {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="../src/styles.css">
            <my-navbar iconexplore="../src/img/iconsearch.svg", iconlike="../src/img/iconlike.svg", iconhome="../src/img/iconhome.svg", iconlibrary="../src/img/iconlibrary.svg",></my-navbar>
            `;

            this.playerinfo.forEach((player) => {
                this.shadowRoot?.appendChild(player);
            });

            const suggestionsSection = this.ownerDocument.createElement("section");
            suggestionsSection.className = "cards";

            this.suggestionsinfo.forEach((suggestions) => {
                suggestionsSection.appendChild(suggestions);
            });
            this.shadowRoot?.appendChild(suggestionsSection);

            const likesSection = this.ownerDocument.createElement("section");
            likesSection.className = "cards";

            this.likesinfo.forEach((likes) => {
                likesSection.appendChild(likes);
            });
            this.shadowRoot?.appendChild(likesSection);
        }
    }
}

customElements.define("app-container", AppContainer);