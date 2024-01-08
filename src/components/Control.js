import React from 'react';
import { useSelector } from 'react-redux';
// import { toggle } from '../redux/splashSlice';
// import { setSelectedLink } from '../redux/linkSlice';
// import { toggleHeaderVisibility, setHeaderVisibility } from '../redux/headerSlice';
import Splash from './Splash';
import Header from './Header';
import Bio from './Bio';
import Projects from './Projects';
import Resume from './Resume';
import ContactInfo from './ContactInfo';

function Control() {

  const isSplashVisible = useSelector((state) => state.splash);
  const isHeaderVisible = useSelector((state) => state.headerVisible.isVisible);
  const selectedLink = useSelector((state) => state.link.selectedLink);

  return (
    <>
      {isSplashVisible && <Splash />}
      {isHeaderVisible && !isSplashVisible && <Header />}
      {selectedLink === 'BIO' && <Bio />}
      {selectedLink === 'PROJECTS' && <Projects />}
      {selectedLink === 'RESUME' && <Resume />}
      {selectedLink === 'CONTACT' && <ContactInfo />}
    </>
  );
}
export default Control;

