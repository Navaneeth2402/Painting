import React from 'react'
import "./Header.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="header">

    
      <div className="top-bar">
        <div className="social-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
        </div>
      
      </div>

      
      <div className="main-header">
        <div className="search">
          <FaSearch />
        <input type="text" placeholder="Search" />
        </div>

        <div className="logo">
          <Link to="/">DESSINE ART</Link>
        </div>

        <div className="right-icons">
          <span>Account</span>
          <FaHeart />
          <FaShoppingBag />
        </div>
      </div>

     
      <div className="nav-bar">
        <Link to="movie">MOVIE POSTER</Link>
        <Link to="art">ART PRINTS</Link>
        <Link to="travel">TRAVEL POSTERS</Link>
      </div>

    </div>
    </div>
  )
}

export default Header
