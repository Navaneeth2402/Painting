import React, { useEffect,useState }  from 'react'
import "./TravelPoster.css"
import { traveldata } from '../constant/Data'
import { useSelector , useDispatch} from 'react-redux'
import { addToCart } from "../redux/CountAnimalsSlice";
import { FaHeart,FaRegHeart } from "react-icons/fa";


const TravelPoster = () => {
   const dispatch=useDispatch()
       const [wishlist, setWishlist] = useState(
       JSON.parse(localStorage.getItem("wishlist")) || []
     );
       const handleAddCart = (travel) => {
     dispatch(addToCart(travel))
   
     
   }
    const toggleWishlist = (travel) => {
   
     let updatedWishlist = [...wishlist];
   
     const exists = updatedWishlist.find(
       (item) => item.id === travel.id
     );
   
     if (exists) {
       // remove
       updatedWishlist = updatedWishlist.filter(
         (item) => item.id !== travel.id
       );
     } else {
       // add
       updatedWishlist.push(travel);
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
          
         {traveldata.map((travel)=>(
          <div className="card" id={travel.id}>
              <div className="img-box">
                  <img src={travel.img} />
                    {
                       wishlist.some((item) => item.id === travel.id) ? (
                   
                       <FaHeart
                         className="heart-icon"
                         onClick={() => toggleWishlist(travel)}
                         style={{ color: "red" }}
                       />
                   
                     ) : (
                   
                       <FaRegHeart
                         className="heart-icon"
                         onClick={() => toggleWishlist(travel)}
                         style={{ color: "black", background: "white", borderRadius: "50%" }}
                       />
                   
                     )
                   }
              </div>
            <h4>{travel.title}</h4>
            <p className="price">{travel.p} </p>
            <div className="btn">
            <button className="add" onClick={() => handleAddCart(travel)}>{travel.add}</button>
            <button className="buy">{travel.buy}</button>
            </div>  
          </div>
    
         ))
        }

      

    </div>
    </div>
  )
}

export default TravelPoster
