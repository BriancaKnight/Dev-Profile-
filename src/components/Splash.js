import React from 'react';
import './Splash.css';
import { useDispatch } from 'react-redux';
import { toggle } from '../redux/splashSlice';
import { setSelectedLink } from '../redux/linkSlice';

function Splash() {
  const dispatch = useDispatch();
  
  const handleLinkClick = (link) => {
    dispatch(setSelectedLink(link));
    dispatch(toggle());
  };

  return (
    <>
  
    <div className='container'>
        <h1>Brianca Knight</h1>
        <h2>Junior Developer</h2>
      
        <div className='navigation'>
        <h4 onClick={() => handleLinkClick('BIO')}>BIO</h4>
        <h4 onClick={() => handleLinkClick('PROJECTS')}>PROJECTS</h4>
        <h4 onClick={() => handleLinkClick('RESUME')}>RESUME</h4>
        <h4 onClick={() => handleLinkClick('CONTACT')}>CONTACT</h4>
        </div>
        </div>
        </>
 
  );
}

export default Splash;