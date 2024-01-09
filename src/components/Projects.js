import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <>
      <div className='projectsStyle'>
        <div className='projectsHeader'>
          <h2>Some of my favorite projects so far...</h2>
        </div>
        <div className='projectsExample'>
          <h3><a href='https://github.com/BriancaKnight/Inventory_Tracker_Update'>The Refillery</a></h3>

          <p>Utilizing React, this application streamlines inventory management for a fictional Refillery retailer. With React's robust state management and the testing capabilities of react-redux, it's designed for precise and efficient retail operations.</p><br />
          </div>
          
        <div className='projectsExample'>
          <h3><a href='https://github.com/BriancaKnight/space'>Super Galactic Age Calculator</a></h3>

          <p>A project utilizing Object-Oriented Javascript and Test-Driven Development with Jest to calculate age equivalency on different planets. Technologies used include Javascript, CSS, HTML, and Webpack.</p><br />
        </div>
        <div className='projectsExample'>
          <h3><a href='https://github.com/BriancaKnight/art-institute'>Art Institute of Chicago Catalogue</a></h3>

          <p>A group project providing an interface for users to search the Art Institute of Chicago's Archives. APIs pull images, titles, artist information, and detailed descriptions of the most popular artwork within the user's search terms. Technologies used for this project include JavaScript, HTML, CSS, and Webpack.</p>
          <p>Co-authored by Kim Robinson and Grant Able.</p><br />
        </div>
      
          <div className='projectsCloser'>
          <h3>Need to see more? <a href='https://github.com/BriancaKnight'>Check out my github!</a></h3>
          </div>
      </div>

    </>
  );
}

export default Projects;