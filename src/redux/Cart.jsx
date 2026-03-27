import React from "react";
import "./Card.css"
import { useSelector, useDispatch } from "react-redux";
import {  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty } from "../redux/CountAnimalsSlice";

const Cart = () => {

 const cartItems = useSelector((state) => state.cart?.cartItems || [])
  const dispatch = useDispatch()

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * 199,
    0
  )

  return (
<div className="cart-container">

<h2 className="cart-title">My Cart</h2>

{cartItems.map((item) => (

<div className="cart-item" key={item.id}>

<div className="cart-img">
<img src={item.img} />
</div>

<div className="cart-info">
<h4>{item.title}</h4>
<p className="cart-price">₹199</p>
</div>

<div className="qty-box">
<button className="qty-btn" onClick={() => dispatch(decreaseQty(item.id))}>-</button>
{item.qty}
<button className="qty-btn" onClick={() => dispatch(increaseQty(item.id))}>+</button>
</div>

<button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
Remove
</button>

</div>

))}

<h2 className="cart-total">Total : ₹ {totalPrice}</h2>

</div>

  )
}

export default Cart