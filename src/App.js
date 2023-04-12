import './App.css';
import React, { useState, useEffect } from 'react';
import Card from "./components/Card/card";
import CardDeck from "./classes/card-deck";
import PokerHand from "./classes/poker-hand";

function App() {
  const [myCards, setCards] = useState([]);
  const cardDeck = new CardDeck();

  const shuffleCards = () => {
    const cards = cardDeck.getCards(5);
    setCards(cards);
  };

  useEffect(() => {
    shuffleCards();
  }, [])

  useEffect(() => {
    if (myCards.length > 0) {
      const pokerHand = new PokerHand(myCards, cardDeck.suits, cardDeck.ranks);
      pokerHand.getOutcome();
    }
  }, [myCards])

  return (
    <div className="App">
      <button onClick={shuffleCards} className="App-btn">Shuffle Cards</button>

      <div className="playingCards">
        <ul className="table App-ul">
          {
            myCards.map((card, index) => {
              return (
                <li key={index}>
                  <Card suit={card.suit} rank={card.rank} />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
