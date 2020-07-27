import React from "react";
import { useStateValue } from "../StateProvider";
import "./assets/CheckoutProduct.css";

function CheckoutProduct(product) {
  const [{}, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id: product.id,
      },
    });
  };
  return (
    <div className="checkout-product">
      <img className="prod-image" src={product.image} alt="product" />
      <div className="prod-details">
        <p className="prod-title">{product.title}</p>
        <span>
          <small>$ </small>
        </span>
        <span>
          <strong>{product.price}</strong>
        </span>
        <p className="prod-rating">
          {Array(product.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </p>
        <button onClick={removeFromCart} className="remove-btn">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
