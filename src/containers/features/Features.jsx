import React from 'react';
import './features.css';
import { Feature } from '../../components';  

const featuresData = [
  {
    title: "Improving end distrust industry",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit ut fugit vero sunt accusamus"
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit ut fugit vero sunt accusamus"
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit ut fugit vero sunt accusamus"
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit ut fugit vero sunt accusamus"
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The future is now and you just need to realize it. step into future today & make it happen!</h1> 
        <p>Request early access to get started.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>

        ))};
      </div>
    </div>
  )
}

export default Features;