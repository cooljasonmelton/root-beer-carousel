import React from 'react';

const Card = props => {
  return (
    <div className="Card">
      <img src={props.imgSrc} className="rootbeer-img"/>
    </div>
  );
}

export default Card;
