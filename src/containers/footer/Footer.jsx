import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className="gradient__text">Do you want to step in to the future before others.</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="gpt3_logo" />
          <p> Crechterwoord K12 182 DK Alknjko, <br /> All right Reserved!</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
          <p>@2022 GPT-3. All right Reserved!</p>
        </div>
    </div>
  )
}

export default Footer;