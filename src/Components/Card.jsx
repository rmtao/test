import React, { useState, useEffect } from "react";
import Pagination from './Pagination';
import './Card.css';

function importAll(r) {
    let images = {};
    r.keys().forEach(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

function Card({card: cardValue, length, total}) {
  const images = importAll(require.context('../../public/images', false, /\.(png|gif)/));
  
  const [card, setCard] = useState(cardValue);
  useEffect(() => {
    setCard(cardValue);
  }, [cardValue]);

  return (
    <div className="card">
      <h4 className="card-header" id={card.type}>{card.type}</h4>
      <div className="container">
        <p>{card.text}</p>
        {images[card.image] !== undefined && (<img src={images[card.image].default} alt={card.alt}/>)}
        <Pagination length={length} total={total} />
      </div>
    </div>
  );
}

export default Card;