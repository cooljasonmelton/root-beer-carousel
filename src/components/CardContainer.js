import React from 'react';
import './CardContainer.css';

// components
import Card from './Card';

const CardContainer = () => {
  return (
    <div className="CardContainer center-box">
        <div className="center-box">
            <div className="arrow left"></div>
            <div className="arrow right"></div>
        </div>
        <Card/>


    </div>
  );
}

export default CardContainer;
