import React from 'react';

const Card = props => {

  const {imgSrc, classList} = props
  return (
    <div className="Card" className={classList}>
      <img src={imgSrc} className="rootbeer-img"/>
    </div>
  );
}

export default Card;
