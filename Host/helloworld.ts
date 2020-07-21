const template = document.createElement('template');
template.innerHTML = `
<body>
    <h3>Web element from host javascript file!</h3>
    <div class='container' id='container'>
</body>
`
class HelloWorld extends HTMLElement {

    public publicField;
    #privateField = "beepboop";

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.publicField = 'This is a public field from the HelloWorld element';
        this.#privateField = 'This is a private field from the HelloWorld element';
    }

    set message(message) {
        if(message) {
            this.setAttribute('message', message);
        } else {
            this.setAttribute('message', 'no message provided');
            this.setAttribute('#message', 'no message provided');
        }
    }

    connectedCallback() {
        let message = this.getAttribute('message');
        let textNode = document.createTextNode(message);
        textNode
        this.shadowRoot.appendChild(textNode);
    }
}
window.customElements.define('hello-world', HelloWorld);