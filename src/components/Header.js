import React from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedLink } from '../redux/linkSlice';
import { toggleHeaderVisibility } from '../redux/headerSlice';

function Header() {

  const dispatch = useDispatch();
  // const isHeaderVisible = useSelector((state) => state.headerVisible.isVisible);

  const handleLinkClick = (link) => {
    dispatch(setSelectedLink(link));
    // dispatch(toggleHeaderVisibility());
  };

  return (
    <div className='headerContainer'>
      <div className='headerNavigation'>
        <h4 onClick={() => handleLinkClick('BIO')}>BIO</h4>
        <h4 onClick={() => handleLinkClick('PROJECTS')}>PROJECTS</h4>
        <h4 onClick={() => handleLinkClick('RESUME')}>RESUME</h4>
        <h4 onClick={() => handleLinkClick('CONTACT')}>CONTACT</h4>
      </div>
      <div className='headerContent'>
        <div className='headerName'>
          <h1>Brianca Knight</h1>
        </div>
        <div className='headerTitle'>
          <h2>Junior Developer</h2>
        </div>
      </div>
    </div>
    );
    }

export default Header;