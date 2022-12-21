import React from 'react';
import './brand.css';
import { slack, atlassian, dropbox, shopify, google } from './import';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className=''>
        <img src={google} alt="google" />
      </div>
      <div className=''>
        <img src={slack} alt="slack" />
      </div>
      <div className=''>
        <img src={atlassian} alt="atlassain" />
      </div>
      <div className=''>
        <img src={shopify} alt="Shopify" />
      </div>
      <div className=''>
        <img src={dropbox} alt="dropbox" />
      </div>

    </div>
  )
}

export default Brand;