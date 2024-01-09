import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <>
    <div className='contactStyle'>
      <div className='contactTitle'>
    <h2>Wanna reach out? Please do!</h2>
    </div>
    <div className='contactP'>
    <p>Email me anytime at <a href='mailto:briancaknight@gmail.com'>briancaknight@gmail.com</a></p>
    <p>Prefer LinkedIn? Connect at <a href='https://www.linkedin.com/in/briancaknight'>linkedin.com/in/briancaknight</a></p>
    <p>Yes, I'm on Indeed, too! <a href='https://profile.indeed.com/p/briancak-1bgzkbb'>profile.indeed.com/p/briancak-1bgzkbb</a></p>
    <p>If you want to peruse some of my work, check out my Github <a href='https://github.com/BriancaKnight'>github.com/BriancaKnight</a></p>
    </div>
    <div className='contactCloser'>
    <h2>I hope to hear from you soon!</h2>
    </div>
    </div>
    </>
  );
}

export default ContactInfo;