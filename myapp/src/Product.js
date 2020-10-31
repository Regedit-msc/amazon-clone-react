import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {

    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add Item To Basket


        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating

            }
        })
    };


    return (
        <div className="product">
            <div className="product__info">
                <h3>{title}</h3>
                <p className="product__price">
                    <small>$</small><strong>{price}</strong></p>

                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (<p>
                                <span>&#11088;</span>
                            </p>))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>

    )
}

export default Product
