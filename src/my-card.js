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
    this.title = "#";
    this.image = "#";
    this.link = "#";
    this.fancy = false;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      image: { type: String },
      link: { type: String },
      title: { type: String},
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
          background-color: white; 
          width: 400px;
          text-align: center;
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
     color: gray;
     background-color: white;
     font-size: 16px;
     margin: 0px 0px 6px 0;
      }
      .btn:focus,
      .btn:hover {
        background-color: #0056b3;
        color: white;
      }
      details summary
      {
        text-align: center;
        font-size: 16px;
        padding: 8px 0;
        color: yellow;
      }
      details[open] summary{
        font-weight: bold;
      }
      details div 
      {
        border: 2px solid black;
        text-align: center;
        padding: 8px;
        height: 70px;
        overflow: auto;
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
    <div id = "cardlist">
      <div class="card">
        <h1 class="card-title">${this.title}</h1>
        <img src="${this.image}" alt="${this.title}" />
     
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
        <slot> </slot>
    
        <a href="${this.link}" target="_blank" rel="noopener noreferrer">
          <button class="btn">Details</button
>
           <!-- put this in your render method where you had details -->
 
        </a>
      </div>
      </details>
      </div>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
