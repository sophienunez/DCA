export var AdAttributes;
(function (AdAttributes) {
    AdAttributes["adimg"] = "adimg";
})(AdAttributes || (AdAttributes = {}));
class Ad extends HTMLElement {
    constructor() {
        super();
        this.adimg = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(AdAttributes);
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
        <link rel="stylesheet" href="components/Ad/Ad.css">
        <div class="ad">
        <div class="adbg"></div>
        <div class="adimg-wrapper">
            <img src="${this.adimg}" class="adimg">
        </div>
        <section class="adtext">
            <div class="adtext-wrapper">
                <div class="adtext-grid">
                    <h1 class="adtext-heading">Bayonetta Origins: Cereza and the Lost Demon™</h1>
                    <a class="adbtn" href="#" >
                        <span class="adbtn-text">Available now</span>
                    </a>
                    <a class="esrb" href="#">
                        <div class="esrb-img">
                            <svg viewBox="0 0 39.68 59.53" width="40" height="60" role="img" title="Teen">
                                <defs>
                                    <style>
                                        .cls-1 {
                                            fill: #fff
                                        }
                                    </style>
                                </defs>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M39.69 0H0v59.53h39.69V0z"></path>
                                        <path d="M39.11.64v58.25H.58V.64h38.53"></path>
                                        <path class="cls-1"
                                            d="M2.52 2.71H36.9v9.66H2.52zM2.5 14.47h34.4v35.51H2.5zm.01 42.32v-4.72h6.9v1.11H5.28v.67h3.5v1.1h-3.5v.74h4.29v1.1H2.51zm12.93-3.34a.52.52 0 00-.4-.32 2.53 2.53 0 00-.72-.09c-.61 0-.88.1-.88.28 0 .69 4.87.26 4.87 2 0 1.09-1.64 1.63-4 1.63s-3.7-.73-3.75-1.58h2.65a.69.69 0 00.46.37 2.52 2.52 0 00.79.12c.69 0 1.16-.12 1.16-.35 0-.71-4.88-.22-4.88-2 0-1 1.56-1.5 3.67-1.5 2.35 0 3.43.66 3.63 1.49zm7.02.67h1.09c.86 0 1.32-.13 1.32-.45s-.47-.49-1.11-.49h-1.3zm0 1v1.64h-2.77v-4.69h4c2.82 0 3.75.44 3.75 1.35 0 .55-.44 1-1.43 1.16.9.18 1.44.29 1.44 1.24 0 .61 0 .83.29.83v.14h-2.81a1.85 1.85 0 01-.14-.83c0-.61-.19-.81-1.48-.81zm9.45-1.94V54h1.16c.55 0 1-.15 1-.42s-.54-.37-1.13-.37zm0 1.64v.87h1.21c.69 0 1.21-.08 1.21-.43s-.65-.44-1.53-.44zm-2.77 2v-4.75h4c1.9 0 3.42.26 3.42 1.19 0 .49-.57.84-1.1 1 .91.13 1.4.57 1.4 1.08 0 1.05-1.44 1.42-3.64 1.42z">
                                        </path>
                                        <path
                                            d="M5.37 23.09l26.61-6.64 2.05 7.1-8.55 2.13 5.73 19.92-9.51 2.38-5.74-19.93-8.55 2.13-2.04-7.09zM28.82 4.8h2.26l2.62 2.99-.09-1.25V4.8h2.31v5.47h-2.26l-2.62-2.98.04 1.29.05 1.69h-2.31V4.8zm-8.14 0h5.99v1.27h-3.58v.79h3.03v1.27h-3.03v.86h3.73v1.28h-6.14V4.8zm-8.42 0h5.99v1.27h-3.59v.79h3.04v1.27h-3.04v.86h3.73v1.28h-6.13V4.8zm-8.79 0h6.74v1.43H8.05v4.04H5.63V6.23H3.47V4.8z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <div class="esrb-text">
                                <div class="esrb-text-side">Animated Blood, Fantasy Violence</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </section>

    </div>
        `;
    }
}
customElements.define("my-ad", Ad);
export default Ad;
