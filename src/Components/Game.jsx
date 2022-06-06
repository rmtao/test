import React, { useState } from "react";
import Card from './Card';
import Pagination from './Pagination';
import './Game.css';

import data from './Resources/card_data.json';

function pickRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function next(cards, index, card_data) {
  index = index + 1;
  if (index > cards.length - 1) {
    cards.push(pickRandom(card_data));
  }
  return [cards, index];
}

function back(index) {
  if (index - 1 < 0) {
    alert("Can't go back anymore!");
  }
  return index - 1 < 0 ? index : index - 1; 
}

function skip(cards, index, card_data) {
  if (index !== cards.length - 1) {
    alert("You can only skip the most recent card");
    return cards;
  }
  cards.pop()
  cards.push(pickRandom(card_data))
  return cards;
}

function Game() {

  const loadedData = JSON.stringify(data);
  const card_data = JSON.parse(loadedData).cards;
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState([pickRandom(card_data)]);
  const [card, setCard] = useState(card_data[cards[index]]);


  return (
    <div>
      <button onClick={() => {
        const idx = back(index);
        setIndex(idx);
        setCard(card_data[cards[idx]]);
      }}>back</button>
      <button onClick={() => {
        const crds = skip(cards, index, card_data);
        setCards(crds);
        setCard(card_data[cards[index]]);
      }}>skip</button>
      <button onClick={() => { 
        const [crds, idx] = next(cards, index, card_data);
        setIndex(idx)
        setCards(crds);
        console.log(card);
        setCard(card_data[cards[idx]]);
      }}>next</button>  
      <Card card={card} />
      <Pagination length={index + 1} total={cards.length} />
    </div> 
  );
}

export default Game;