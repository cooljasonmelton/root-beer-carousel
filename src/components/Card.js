import React from 'react';

const Card = props => {

  const {imgSrc, classList} = props
  return (
    <div className={classList}>
      <img src={imgSrc} className="rootbeer-img" alt='root beer img'/>
    </div>
  );
}

export default Card;
