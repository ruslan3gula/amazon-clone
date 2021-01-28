import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
      </div>
      <div className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <div className="product_rating">
        {Array(rating).fill(<p className="product_rating_pic">⭐</p>)}
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          alt=""
        />
      </div>
      <button onClick={addToBasket}>Add to busket</button>
    </div>
  );
}
