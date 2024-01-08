import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='container'>
      <div className='navigation'>
        <h4>BIO</h4>
        <h4>PROJECTS</h4>
        <h4>RESUME</h4>
        <h4>CONTACT</h4>
      </div>
      <div className='content'>
        <div className='name'>
          <h1>Brianca Knight</h1>
        </div>
        <div className='title'>
          <h2>Junior Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;