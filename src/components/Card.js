import React from 'react';

const Card = props => {

  const {imgSrc, classList} = props
  return (
    <div className="Card">
      <img src={imgSrc} className={classList}/>
    </div>
  );
}

export default Card;
