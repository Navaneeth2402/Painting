import React, { useEffect } from "react";
import "./MoviePoster.css"
import { moviedata } from '../constant/Data'

const MoviePoster = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div>
      <div className="products" >
      
     {moviedata.map((movie)=>(
      <div className="card" id={movie.id}>
        <img src={movie.img} />
        <h4>{movie.title}</h4>
        <p className="price">{movie.p} </p>
        <div className="btn">
        <button className="add">{movie.add}</button>
        <button className="buy">{movie.buy}</button>
        </div>  
      </div>

     ))
    }
      
        

{/*      
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Movie-Posters-Black-Frame-Harry-Potter-and-the-Prisoner-of-Azkaban-2004-Movie-Posters-Art_720x.jpg?v=1642613029"
         
        />
        <h4>Harry Potter </h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div> 
      </div>

     
      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Movie-Posters-Black-Frame-Joker-2019-Movie-Posters-Art_720x.jpg?v=1642613109"
         
        />
        <h4>Joker (2019) </h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div>
      </div>

      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Movie-Posters-Black-Frame-Inglourious-Basterds-2009-Movie-Posters-Art_720x.jpg?v=1642613082"
          
        />
        <h4>Inglourious Basterds</h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div>
      </div>

      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Movie-Posters-Black-Frame-Fight-Club-1999-Movie-Posters-Art_720x.jpg?v=1642612868"
         
        />
        <h4>Fight Club </h4>
        <p className="price">From Rs. 199.00</p>
        <div className="btn">
        <button className="add">ADD TO CART</button>
        <button className="buy">BUY IT NOW</button>
        </div> 
      </div>

      <div className="card">
        <img
          src="https://dessineart.com/cdn/shop/products/Movie-Posters-Black-Frame-Once-Upon-a-Time_-in-Hollywood-_2019_-Movie-Posters-Art_720x.jpg?v=1651769792"
      
        />
        <h4>Once Upon a Time in Hollywood</h4>
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

export default MoviePoster
