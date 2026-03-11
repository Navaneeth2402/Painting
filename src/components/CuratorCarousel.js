import React from 'react'
import "./CuratorCarousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaUserTie, FaMoneyBillWave, FaUndo, FaPalette } from "react-icons/fa";
import {homecuratordata} from "../constant/Data"
import { Link } from "react-router-dom";
import { lindata } from '../constant/Data';
import img35 from "../assests/Images/Movie_Posters_.webp"
import img36 from "../assests/Images/Art prints.avif"
import img37 from "../assests/Images/Travel_Posters_460x.webp"

const CuratorCarousel = () => {
  return (
    <div>
    <div className="container my-5">
  <h3 className="text-center mb-4">Our Curator's Pick</h3>

  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

    <div className="carousel-inner">

      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="row text-center">
          {lindata.slice(0,4).map((pick)=>(
            <div className="col-md-3" key={pick.id}>
              <img src={pick.img} className="img-fluid" alt={pick.title}/>
              <h6 className="mt-2">{pick.title}</h6>
              <p>{pick.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 2 */}
      <div className="carousel-item">
        <div className="row text-center">
          {lindata.slice(4,8).map((pick)=>(
            <div className="col-md-3" key={pick.id}>
              <img src={pick.img} className="img-fluid" alt={pick.title}/>
              <h6 className="mt-2">{pick.title}</h6>
              <p>{pick.p}</p>
            </div>
          ))}
        </div>
      </div>

    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>
</div>
    <div className="buy-section">
      <h2 className="section-title">Buy Paintings Online</h2>

      <div className="paintings-grid">

        {
          homecuratordata.map((item)=>
                <div className="painting-card" id={item.id}>
          <img src={item.img} alt={item.title} />
          <p>{item.title}</p>
        </div>
          )
        }
        
    


      </div>
    </div>

     <div className="features-section">
      <div className="features-container">

        <div className="feature-box">
          <div className="icon-circle">
            <FaUserTie />
          </div>
          <p>Art Advisory</p>
        </div>

        <div className="feature-box">
          <div className="icon-circle">
            <FaMoneyBillWave />
          </div>
          <p>Cash on Delivery</p>
        </div>

        <div className="feature-box">
          <div className="icon-circle">
            <FaUndo />
          </div>
          <p>Returns</p>
        </div>

        <div className="feature-box">
          <div className="icon-circle">
            <FaPalette />
          </div>
          <p>Museum Grade</p>
        </div>

      </div>
    </div>

    <div className="buy-section">
      <h2 className="section-title">Best Selling Categories</h2>

      <div className="paintings-grit">
        
        <Link to="/movie">
        <div className="painting-card">
          <img src={img35} />
          <p>MOVIE POSTERS</p>
        </div>
        </Link>

         <Link to="/art">
        <div className="painting-card">
          <img src={img36}/>
          <p>ART PRINTS</p>
        </div>
        </Link>
        
        <Link to="/travel">
        <div className="painting-card">
          <img src={img37} />
          <p>TRAVEL POSTERS</p>
        </div>
        </Link>

        </div>

        </div>
        <div className="story-section">
      <div className="story-container">

        {/* Left Content */}
        <div className="story-content">
          <h2>Our Story</h2>

          <p>
            With the intent to make the most premium quality art more accessible,
            Dessine Art is here to revolutionize the Art Industry and enhance the
            confidence of online art buyers. With us, you can effortlessly buy art
            ranging from every style, from classical to contemporary and affordable
            to high-end pieces.
          </p>

          <p>
            Every artwork on Dessine Art is creatively curated by our team to cater
            to the aesthetics of art lovers around the world. Along with established
            artists, we are also promoting the work of budding artists so that it can
            help them reach out to a wider audience.
          </p>

          <button className="story-btn">READ MORE</button>
        </div>

        
        <div className="story-image">
          <img src="https://dessineart.com/cdn/shop/files/Yellow_DA_Art_900x.jpg?v=1756105196" alt="Our Story" />
        </div>

      </div>
    </div>
    </div>
  )
}

export default CuratorCarousel
