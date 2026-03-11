import React from 'react'
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaUserTie, FaMoneyBillWave, FaUndo, FaPalette } from "react-icons/fa";
import CuratorCarousel from '../components/CuratorCarousel';
import { Link } from 'react-router-dom'
import  "../assests/Images/DA_Botanical_Banner_1950x.jpg"
const Home = () => {
  return (
    <>
     <div className="main">
      <div
        className="main-image">
        
      
        <div className="overlay"></div>

        
        <div className="main-content">
          <p className="subtitle">INSPIRED BY NATURE'S PALETTE</p>
          <h1>The Botanical Edit</h1>
          <p className="description">Perfect for Modern Living</p>
          <Link to="explore">
                <button className="main-btn">EXPLORE THE ART</button>
          </Link>
        </div>
      </div>
    </div>
              <CuratorCarousel/>

    </>
  )
}


export default Home
