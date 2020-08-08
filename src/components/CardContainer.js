import React, { useState } from 'react';
import './CardContainer.css';

// images
import {
  rootBeer1,
  rootBeer2,
  rootBeer3,
  rootBeer4,
  rootBeer5
} from '../images/index'

// components
import Card from './Card';

const CardContainer = () => {
  const [cardNum, setCardNum] = useState(1)

  const setClass = num => {
    const classArr = ['Card']
    if (num === cardNum) classArr.push('present')
    if (num > cardNum) classArr.push('next')
    if (num < cardNum) classArr.push('previous')
    return classArr.join(' ')
  }


  return (
    <div className="CardContainer center-box">
      
      <div className="arrow-container center-box">
        
        {/* card num is 0, arrow display is none  */}
        <div onClick={()=> setCardNum(cardNum - 1)} 
          style={{display: cardNum === 1 ? "none" : "block" }} 
          className="arrow left">
        </div>
        
        <h1>{cardNum}</h1>

        {/* card num is 6, arrow display is none  */}
        <div onClick={()=> setCardNum(cardNum + 1)} 
          style={{display: cardNum === 5 ? "none" : "block" }}
          className="arrow right"></div>
      </div>

      <Card imgSrc={rootBeer1} classList={setClass(1)}/>
      <Card imgSrc={rootBeer2} classList={setClass(2)}/>
      <Card imgSrc={rootBeer3} classList={setClass(3)}/>
      <Card imgSrc={rootBeer4} classList={setClass(4)}/>
      <Card imgSrc={rootBeer5} classList={setClass(5)}/>    


    </div>
  );
}

export default CardContainer;
