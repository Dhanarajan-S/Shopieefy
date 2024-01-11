import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
function Cart (){

    const {cartItems , getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    return(
        <div className="cart">
            <div>  
                <h1>Your cart items</h1>
            </div>
            <div className="cartItems">
                 {PRODUCTS.map((product) =>{
            
                  if (cartItems[product.id] !==0) {
                    return <CartItem data={product} />
                  }

                 })}

            </div>

            <div className="checkout">
                <p> SubTotal: ₹{totalAmount} </p>
                
            </div>
        </div>
    )


}

export default Cart;

