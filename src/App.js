import './App.css';
import React, { useState, useEffect } from 'react';
import CardDeck from './classes/card-deck';
import Card from "./components/Card/card";

function App() {
  const [myCards, setCards] = useState([]);

  useEffect(() => {
    const cardDeck = new CardDeck();
    const cards = cardDeck.getCards(5);
    setCards(cards);
  }, [])

  return (
    <div className="App">
      <div className="playingCards">
        <ul className="table App-ul">
          {
            myCards.map((card, index) => {
              return (
                <li key={index}>
                  <Card suit={card.suit} rank={card.rank}></Card>
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
