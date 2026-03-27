import React, { useEffect, useState } from "react";
import "./MoviePoster.css"
import { moviedata } from '../constant/Data'
import { useSelector ,useDispatch } from "react-redux";
import { increment, keeppeacock } from "../redux/CountAnimalsSlice";
import { addToCart } from "../redux/CountAnimalsSlice";
import { FaHeart,FaRegHeart  } from "react-icons/fa";

const MoviePoster = () => {
    
    const dispatch=useDispatch()
    const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
    const handleAddCart = (movie) => {
  dispatch(addToCart(movie))

  
}
 const toggleWishlist = (movie) => {

  let updatedWishlist = [...wishlist];

  const exists = updatedWishlist.find(
    (item) => item.id === movie.id
  );

  if (exists) {
    // remove
    updatedWishlist = updatedWishlist.filter(
      (item) => item.id !== movie.id
    );
  } else {
    // add
    updatedWishlist.push(movie);
  }

  setWishlist(updatedWishlist);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
};
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div>

      <div className="products" >
      
     {moviedata.map((movie)=>(
      <div className="card" key={movie.id}>
        <div className="img-box">
        <img src={movie.img} />
 {
    wishlist.some((item) => item.id === movie.id) ? (

    <FaHeart
      className="heart-icon"
      onClick={() => toggleWishlist(movie)}
      style={{ color: "red" }}
    />

  ) : (

    <FaRegHeart
      className="heart-icon"
      onClick={() => toggleWishlist(movie)}
      style={{ color: "black", background: "white", borderRadius: "50%" }}
    />

  )
}
    </div>
        <h4>{movie.title}</h4>
        <p className="price">{movie.p} </p>
        <div className="btn">
        <button className="add"  onClick={() => handleAddCart(movie)}>{movie.add}</button>
        <button className="buy">{movie.buy}</button>
        </div>  
      </div>

     ))
    }
      
    </div>
        
    </div>

  )
}

export default MoviePoster
