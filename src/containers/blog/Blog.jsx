import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import';


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, we are blogging it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className="gpt3__blog-container_group-a">
        <Article imgUrl={blog01} date="Dec 17, 2022" title="GPT-3 and Open Ai is the future. let us explore how it is?"/>        
        </div>
        
        <div className="gpt3__blog-container_group-b">
          <Article imgUrl={blog02} date="Dec 17, 2022" title="GPT-3 and Open Ai is the future. let us explore how it is?"/>
          <Article imgUrl={blog03} date="Dec 17, 2022" title="GPT-3 and Open Ai is the future. let us explore how it is?" />
          <Article imgUrl={blog04} date="Dec 17, 2022" title="GPT-3 and Open Ai is the future. let us explore how it is?"/>
          <Article imgUrl={blog05} date="Dec 17, 2022" title="GPT-3 and Open Ai is the future. let us explore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;