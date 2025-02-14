import { LitElement, html, css } from 'lit';

/**
 * MyCard: A customizable card component.
 */

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'My Card';
    this.image =
      'https://th.bing.com/th/id/R.f7b805f8d6aebf6d73c6ca65469a7d1e?rik=TqknlK%2b%2bXuBIVQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fairplane-clipart-transparent-background%2fairplane-clipart-transparent-background-13.png&ehk=rpC8t5wR6CTJSZpqdsUZfPnvQC7BgJqtoC1VobnYnbQ%3d&risl=&pid=ImgRaw&r=0';
    this.link = 'https://hax.psu.edu';
    this.fancy = true;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      image: { type: String },
      link: { type: String },
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) .card {
        background-color: blue; 
      }

      :host(:not([fancy])) .card {
        background-color: #ffffff; 
      }
      .card.toggled
      {
        background-color: red;
        color: blue;
      }

      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        width: 300px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .card img {
        width: 100%;
        height: auto;
      }

      .card-title {
        font-size: 1.5em;
        margin: 16px;
        font-weight: bold;
      }

      .btn {
        display: inline-block;
        margin: 16px;
        padding: 8px 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        text-decoration: none;
        cursor: pointer;
        text-align: center;
      }

      .btn:hover {
        background-color: #0056b3;
      }
    `;
  }
// put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e.newState);
  if (e.newState === "open") {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`
      <div class="card">
        <h1 class="cardheader">${this.title}</h1>
        <img src="${this.image}" alt="${this.title}" />
        <div class="card-title">${this.title}</div>
       <!-- put this in your render method where you had details -->
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">

        <summary> Description </summary>
        <div>
        <slot> </slot>
        <a href="${this.link}" target="_blank" rel="noopener noreferrer">
          <button class="btn">Details</button>
        </a>
      </div>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
