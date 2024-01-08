import React from 'react';
import { useSelector } from 'react-redux';
import Splash from './Splash';
import Header from './Header';
import Bio from './Bio';
import Projects from './Projects';
import Resume from './Resume';
import ContactInfo from './ContactInfo';

function Control() {

  const isSplashVisible = useSelector((state) => state.splash);
  const selectedLink = useSelector((state) => state.link.selectedLink);
  const isHeaderVisible = !isSplashVisible || (selectedLink !== '');

  return (
    <>
      {isSplashVisible && <Splash />}
      {isHeaderVisible && <Header />}
      {selectedLink === 'BIO' && <Bio />}
      {selectedLink === 'PROJECTS' && <Projects />}
      {selectedLink === 'RESUME' && <Resume />}
      {selectedLink === 'CONTACT' && <ContactInfo />}
    </>
  );
}
export default Control;

