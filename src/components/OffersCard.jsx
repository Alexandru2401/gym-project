import React, { useContext, useState } from "react";
import { CartContext } from "../store/context";
import { addToCart } from "../store/action";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function OffersCard(props) {
  const { name, description, price, id } = props;
  const { dispatch } = useContext(CartContext);

  const [showNotification, setNotification] = useState(false);

  function handleAddToCart(product) {
    const actionResult = addToCart(product);
    dispatch(actionResult);
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  }

  return (
    <div key={id} className="offers-card-container">
      <h2 className="offers-title">{name}</h2>
      <p className="offers-description">Description: {description}</p>
      <p className="offers-price">Price: {price} $</p>
      <button
        className="btn-secondary"
        onClick={() => {
          handleAddToCart({
            id: id,
            name: name,
            description: description,
            price: price,
          });
        }}
      >
        Add to cart
        <ShoppingCartIcon />
      </button>
      {showNotification && (
        <div className="product-notification">Added to cart!</div>
      )}
    </div>
  );
}
