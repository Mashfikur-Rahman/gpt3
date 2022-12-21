import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='what-gpt'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error enim rerum voluptatibus accusantium facere voluptas possimus! Natus aperiam dignissimos explicabo itaque ipsam!"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibility are beyond your imagination!</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error enim rerum voluptatibus accusantium facere voluptas possimus! Natus aperiam dignissimos explicabo itaque ipsam!"/>
        <Feature title="Knowledge" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error enim rerum voluptatibus accusantium facere voluptas possimus! Natus aperiam dignissimos explicabo itaque ipsam!"/>
        <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error enim rerum voluptatibus accusantium facere voluptas possimus! Natus aperiam dignissimos explicabo itaque ipsam!"/>
      </div>
    </div>
  )
}

export default WhatGPT3;