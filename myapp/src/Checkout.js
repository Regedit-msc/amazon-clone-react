import React from 'react';
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";
function Checkout() {
    const [{ basket,user }] = useStateValue();


    return (
        <div className="checkout">
            <div><img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" alt="" />

            {basket?.length === 0 ? (
                <div className="checkout__left">
                    <h2>Your shopping basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one,<br/> Click the : "Add to basket button below the image."
                    </p>
                </div>)
                : (
                   <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout__title"> Your Shopping basket</h2>
                        {/* List out all of the checkout products */}
                        {basket.map((item) =>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image ={item.image}
                            price = {item.price}
                            rating={item.rating}
                            />


                        ))}
                    </div>

                )}</div>
                {basket.length > 0 &&(
                    <div className="checkout__right" >
                        
                       <Subtotal/> 
                    </div>
                    
                )} 
        </div>

    );
};

export default Checkout
