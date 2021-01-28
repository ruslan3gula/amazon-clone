import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

export default function CheckoutProduct({ id, title, price, image, rating }) {
  console.log("props are", { id, title, price, image, rating });
  const [{ basket }, dispatch] = useStateValue();
  const removeCheckoutProduct = (e) =>
    dispatch(
      {
        type: "REMOVE_FROM_BASKET",
        id: id
      },
      console.log("image", image)
    );
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <div className="checkoutProduct_title">{id}</div>
        <div className="checkoutProduct_title">{title}</div>
        <div className="checkoutProduct_price">{price}</div>
        <div className="checkoutProduct_rating">
          {Array(rating).fill(<p>⭐</p>)}
        </div>
        <button onClick={removeCheckoutProduct}>Remove from Basket</button>
      </div>
    </div>
  );
}
