import React from 'react';

function Control() {
  return (
    <h2>This is where the control center will be!</h2>
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