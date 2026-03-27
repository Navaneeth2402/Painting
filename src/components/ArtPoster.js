import React, { useEffect,useState }  from 'react'
import "./ArtPoster.css"
import { artdata } from '../constant/Data'
import { useSelector , useDispatch} from 'react-redux'
import { addToCart } from "../redux/CountAnimalsSlice";
import { FaHeart,FaRegHeart } from "react-icons/fa";

const ArtPoster = () => {
    const dispatch=useDispatch()
        const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem("wishlist")) || []
      );
        const handleAddCart = (art) => {
      dispatch(addToCart(art))
    
      
    }
     const toggleWishlist = (art) => {
    
      let updatedWishlist = [...wishlist];
    
      const exists = updatedWishlist.find(
        (item) => item.id === art.id
      );
    
      if (exists) {
        // remove
        updatedWishlist = updatedWishlist.filter(
          (item) => item.id !== art.id
        );
      } else {
        // add
        updatedWishlist.push(art);
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
          
         {artdata.map((art)=>
          <div className="card" id={art.id}>
            <div className="img-box">
                    <img src={art.img} />
                     {
                        wishlist.some((item) => item.id === art.id) ? (
                    
                        <FaHeart
                          className="heart-icon"
                          onClick={() => toggleWishlist(art)}
                          style={{ color: "red" }}
                        />
                    
                      ) : (
                    
                        <FaRegHeart
                          className="heart-icon"
                          onClick={() => toggleWishlist(art)}
                          style={{ color: "black", background: "white", borderRadius: "50%" }}
                        />
                    
                      )
                    }
                </div>
            <h4>{art.title}</h4>
            <p className="price">{art.p} </p>
            <div className="btn">
            <button className="add" onClick={() => handleAddCart(art)}>{art.add}</button>
            <button className="buy">{art.buy}</button>
            </div>  
          </div>
         )
        }
</div>
    </div>
  )
}

export default ArtPoster
