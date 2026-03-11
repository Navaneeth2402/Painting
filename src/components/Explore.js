import React from 'react'
import "./CuratorCarousel.css"
import { homecuratordata } from '../constant/Data'
const Explore = () => {
  return (
    <div>
      <div className="buy-section">
      <h2 className="section-title">Buy Paintings Online</h2>

      <div className="paintings-grid">
        {
          homecuratordata.map((item)=>
        <div className="painting-card" id={item.id}>
          <img src={item.img} alt={item.title}/>
          <p>{item.title}</p>
        </div>
          )
        }

        {/* <div className="painting-card">
          <img src="https://dessineart.com/cdn/shop/files/min_460x.jpg?v=1673118626" alt="Minimalist Wall Art" />
          <p>Minimalist Wall Art</p>
        </div>

        <div className="painting-card">
          <img src="https://dessineart.com/cdn/shop/files/Image-3-Madhubani-Art-05_172ca759-aebf-4e98-bf23-b130c6eb54f2_460x.jpg?v=1714164405" alt="Classical Indian" />
          <p>Classical Indian</p>
        </div>

        <div className="painting-card">
          <img src="https://dessineart.com/cdn/shop/files/10_60dafad5-dc89-4eaf-b4d7-59cf370f55b8_460x.png?v=1672688304" alt="Floral Flower Paintings" />
          <p>Floral Flower Paintings</p>
        </div>

        <div className="painting-card">
          <img src="https://dessineart.com/cdn/shop/files/BW_art_460x.jpg?v=1673118294" alt="Black and White Art" />
          <p>Black And White Art</p>
        </div>

        <div className="painting-card">
          <img src="https://dessineart.com/cdn/shop/files/Boho_Art_460x.jpg?v=1673119050" alt="Boho Art" />
          <p>Boho Art</p>
        </div>

        <div className="painting-card">
          <img src="https://dessineart.com/cdn/shop/files/7_a5209408-5942-42ab-9811-cb7748253de6_460x.png?v=1672688521" alt="Line Art" />
          <p>Line Art</p>
        </div>

        <div className="painting-card">
          <img src="https://dessineart.com/cdn/shop/files/coco_chanel_poster_460x.jpg?v=1673119495" alt="Fashion Art & Posters" />
          <p>Fashion Art & Posters</p>
        </div> */}

      </div>
    </div>
    </div>
  )
}

export default Explore
