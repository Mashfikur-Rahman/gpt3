import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse officiis debitis dolorem, eligendi beatae libero suscipit cupiditate odio dolores harum.</p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility;