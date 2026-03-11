import React, { useEffect }  from 'react'
import "./ArtPoster.css"
import { artdata } from '../constant/Data'

const ArtPoster = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
          <div className="products" >
          
         {artdata.map((art)=>
          <div className="card" id={art.id}>
            <img src={art.img} />
            <h4>{art.title}</h4>
            <p className="price">{art.p} </p>
            <div className="btn">
            <button className="add">{art.add}</button>
            <button className="buy">{art.buy}</button>
            </div>  
          </div>
         )
        }

{/*      
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Image-1-Little-cactus_720x.jpg?v=1693076749"
          
        />
        <h4>Little Cactus</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div> 
      </div>

      
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Image-1-Linocut-Flower-Viva-Magenta_720x.jpg?v=1693076686"
          
        />
        <h4>Linocut Flower</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div>
      </div>

    </div>

    <div className="products">

      
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/files/Image-1-Voyage_720x.jpg?v=1743570890"
        />
        <h4>Voyage </h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div>
      </div>

      
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Image-1-Summer-Sun_720x.jpg?v=1693077149"
          
        />
        <h4>Summer Sun</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div> 
      </div>

      
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Image-1-Add-More-Colors_720x.jpg?v=1693076187"
          
        />
        <h4>Add More Colors</h4>
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

export default ArtPoster
