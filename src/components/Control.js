import React from 'react';
import Splash from './Splash';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../redux/splashSlice'

function Control() {
  const dispach = useDispatch();
  const splash = useSelector((state) => state.splash);

  const handleScroll = () => {
    dispach(toggle());
  };

  return (
      <div onScroll={handleScroll}>
      {splash ? (
        <Splash />
    ) : (
      <Header />
    )}
    </div>
  );
}

export default Control;