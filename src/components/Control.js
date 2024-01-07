import React, { useEffect } from 'react';
import Splash from './Splash';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../redux/splashSlice'

function Control() {
  const dispatch = useDispatch();
  const splash = useSelector((state) => state.splash);

  const handleScroll = () => {
    dispatch(toggle());
    console.log("SCROLL HIT")
  };

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [dispatch]);

  return (
      <>
      {splash ? (
        <Splash />
      ) : (
        <Header />
      )}
      </>
  );
}

export default Control;