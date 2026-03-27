import React, { useState } from "react";
import "./Wishlist.css";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CountAnimalsSlice";

const Wishlist = () => {

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const dispatch = useDispatch();

  //  REMOVE FUNCTION
  const removeItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  // MOVE TO CART 
  const moveToCart = (item) => {

    dispatch(addToCart(item));   // add to cart

    const updatedWishlist = wishlist.filter(
      (i) => i.id !== item.id
    );

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  return (

    <div className="wishlist-container">

      <h2 className="wishlist-title">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty">Wishlist is empty</p>
      ) : (

        wishlist.map((item) => (

          <div className="wishlist-card" key={item.id}>

            <img src={item.img} />

            <div className="wishlist-info">

              <h4>{item.title}</h4>
              <p>{item.p}</p>

              {/* ✅ MOVE BUTTON */}
              <button
                className="move-btn"
                onClick={() => moveToCart(item)}
              >
                Move to Cart
              </button>

              {/* REMOVE BUTTON */}
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>

            </div>

          </div>

        ))

      )}

    </div>
  )
}


export default Wishlist