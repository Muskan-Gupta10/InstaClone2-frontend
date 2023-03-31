import React from 'react';
import './LandingPage.css';
import { NavLink } from 'react-router-dom';
import mainImage from "./images/lens-1418954.png"

 function Landing_page() {

  return(
    <div className='Container'>
      <img id="image" src={mainImage} alt="image"/>
      <p id='ptag'>10x Team 04
      <br/>
      <NavLink to="/allpost"><button id='btn'>Enter</button></NavLink>
      </p>
    </div>
  );
}
export default Landing_page
