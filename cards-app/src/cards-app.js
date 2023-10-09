import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "jordan-card/src/jordan-card.js";


class CardsApp extends LitElement {

  static styles = css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--my-card-background-color);
  }
  .cards {
    display:flex;
  }

  .card {
    max-width: 400px;
    margin: 10px;
    background-color: pink;
    text-align: center;
    padding: 6px;
    border-radius: 6px;
    align-items: center;
  }

  /* The heading setting in the card */
  .card h1 {
    font-size: 36px;
    color: #ce1141;
  }

  /* The second heading setting in the card */
  .card h2 {
    font-size: 30px;
    color: #ce1141;
  }

  /* The content setting in the card */
  .card p {
    font-size: 16px;
    color: black;
  }

  .card img {
    width: 85%;
    height: auto;
  }

  /*The button setting in the card*/
  .button1 {
    margin: 24px auto;
  }
  .button1 button {
    font-size: 20px;
    color: #ce1141;
    background-color: white;
    padding: 4px;
  }

  .button1 button:hover,
  .button1 button:focus {
    color: white;
    background-color: #ce1141;
  }

  @media only screen and (min-width: 800px) {
    #detail1 {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 799px) {
    #detail1 {
      display: none;
    }
  }
  `;

  constructor() {
    super();
    this.name = "Michael Jordan";
    this.information = 'Michael Jeffrey Jordan (born February 17, 1963), also known by his initials MJ, is an American former professional basketball player and businessman. Widely considered the greatest basketball player of all time, the official National Basketball Association (NBA) website states that "by acclamation, Michael Jordan is the greatest basketball player of all time." He played fifteen seasons in the NBA, winning six NBA championships with the Chicago Bulls. He was integral in popularizing the sport of basketball and the NBA around the world in the 1980s and 1990s, becoming a global cultural icon.';
  }

  

  render() {
    return html`
      <main>
        <meme-maker 
          alt="Cat stalking a small toy" 
          image-url="https://cdn2.thecatapi.com/images/9j5.jpg" 
          top-text="I bring you" 
          bottom-text="the death">
        </meme-maker>
        
        <jordan-card2>
        <div class="cards">
          <div class="card">
            <h1>${this.name}</h1>
            <img
              src="https://thumbs.dreamstime.com/b/michael-jordan-chicago-bulls-superstar-image-taken-color-slide-73861883.jpg"
              alt="Jordan"
            />
            <div class="content">
              <summary><h2>Michael Jordan</h2></summary>
              <details>
                <p>${this.information}</p>
                <slot></slot>
              </details>
              <div class="button1"></div>
            </div>
          </div>
        </div>
        </jordan-card2>
      </main>
    `;
  }
}

customElements.define('cards-app', CardsApp);