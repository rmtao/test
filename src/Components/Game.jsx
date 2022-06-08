import React, { useState } from "react";
import Card from './Card';
import './Game.css';

import data from './Resources/card_data.json';

function Game({players, setPlayers}) {

  const loadedData = JSON.stringify(data);
  const card_data = JSON.parse(loadedData).cards;
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState([pickRandom(card_data)]);
  const [card, setCard] = useState(card_data[cards[index]]);

  function pickRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  }

  const onLastCard = index === cards.length - 1;
  const onFirstCard = index === 0; 

  const next = () => {
    if (index + 1 > cards.length - 1) {
      cards.push(pickRandom(card_data));
      setCards(cards);
    }
    setIndex(index + 1);
    setCard(card_data[cards[index + 1]]);
    if (onLastCard) {
      setPlayers(players.concat(players.splice(0,1)));
    }
  }

  const back = () => {
    setIndex(index - 1 < 0 ? index : index - 1);
    setCard(card_data[cards[index - 1]]);
  }

  const skip = () => {
    cards.pop()
    cards.push(pickRandom(card_data))
    setCards(cards);
    setCard(card_data[cards[index]]);
  }


  return (
    <div>
      <button onClick={back} disabled={onFirstCard}>back</button>
      <button onClick={skip} disabled={!onLastCard}>skip</button>
      <button onClick={next}>next</button>  
      <Card card={card} length={index+1} total={cards.length} />
      
    </div> 
  );
}

export default Game;