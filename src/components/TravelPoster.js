import React, { useEffect }  from 'react'
import "./TravelPoster.css"
import { traveldata } from '../constant/Data'


const TravelPoster = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
          <div className="products" >
          
         {traveldata.map((travel)=>(
          <div className="card" id={travel.id}>
            <img src={travel.img} />
            <h4>{travel.title}</h4>
            <p className="price">{travel.p} </p>
            <div className="btn">
            <button className="add">{travel.add}</button>
            <button className="buy">{travel.buy}</button>
            </div>  
          </div>
    
         ))
        }

      {/* <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Black-Frame-Barcelona-Spain_720x.jpg?v=1643490642"
          
        />
        <h4>Spain</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div> 
      </div>

    
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Black-Frame-Dublin_720x.jpg?v=1643490982"
        
        />
        <h4>Dublin</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div>
      </div>



      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Travel-Poster-Black-Frame-Paris-Eiffel-Travel_720x.jpg?v=1653557263"
        />
        <h4>Paris</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div>
      </div>

      
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Black-Frame-Retro-Poster-Tamil-Nadu-India-Travel-Poster_720x.jpg?v=1643492413"
        
        />
        <h4>India</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div> 
      </div>

    
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Black-Frame-England-London_720x.jpg?v=1643491046"
          
        />
        <h4>London</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div>
      </div> */}

    </div>
    </div>
  )
}

export default TravelPoster
