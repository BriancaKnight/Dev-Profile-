import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../redux/splashSlice';
import { setSelectedLink } from '../redux/linkSlice';
import Header from './Header'

function Control() {

  const dispatch = useDispatch();
  const isSplashVisible = useSelector((state) => state.splash);

  const handleLinkClick = (link) => {
    if (isSplashVisible) {
      dispatch(toggle());
    }
  
    dispatch(setSelectedLink(link));
  };

  return (
    <>
    <Header />
      <h2 onClick={handleLinkClick}>Control Center</h2>
      <h2 onClick={() => handleLinkClick('BIO')}>BIO</h2>
      <h2 onClick={() => handleLinkClick('RESUME')}>RESUME</h2>
    </>
  );
}

export default Control;










// import React, { useEffect, useState } from 'react';
// import Splash from './Splash';
// import Header from './Header';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggle } from '../redux/splashSlice'

// function Control() {
//   const dispatch = useDispatch();
//   const splash = useSelector((state) => state.splash);

//   useEffect(() => {
//     dispatch(toggle());
//     console.log("SCROLL HIT");
//   }, []);
// //   // const [hasScrolled, setHasScrolled] = useState(false)

// //   const handleScroll = () => {
// //     if (!hasScrolled) {
// //     dispatch(toggle());
// //     setHasScrolled(true);
// //     console.log("SCROLL HIT")
// //     }
// //   };

// // useEffect(() => {
// //   window.addEventListener('scroll', handleScroll);
// //   return () => {
// //     window.removeEventListener('scroll', handleScroll);
// //   };
// // }, [hasScrolled]);

//   return (
//       <>
//       {splash ? (
//         <Splash />
//       ) : (
//         <Header />
//       )}
//       </>
//   );
// }

// export default Control;