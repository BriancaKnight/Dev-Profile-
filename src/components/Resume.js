import React from 'react';
import myResume from '../assets/images/resume.png'
import './Resume.css';


function Resume() {
  return (
    <>
      <div className='resumeStyle'>
        <div className='resumeHeader'>
          <h2>Knight Resume '24</h2>
        </div>
        <div className='img'>
          <img src={myResume} alt="Knight Resume '24" />
        </div>
        <div className='resumeCloser'>
          <h2><a href='https://docs.google.com/document/d/1cHH_s1S21TkoD_R2NSqZMGMAShVHhhZczDq_YI9bKqs/edit?usp=sharing' download>Download a copy of my resume here.</a></h2>
        </div>

      </div>

    </>
  );
}

export default Resume;
