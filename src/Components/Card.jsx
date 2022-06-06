import React, { useState, useEffect } from "react";
import './Card.css';

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}


function Card({card: cardValue}) {
  const images = importAll(require.context('../../public/images', false, /\.png/));
  
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
        
      </div>
    </div>
  );
}

export default Card;