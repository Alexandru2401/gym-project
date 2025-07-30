import React, { useContext, useRef, useState } from "react";
import { CartContext } from "../store/context";
import { removeFromCart } from "../store/action";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

export default function Cart() {
  const modal = useRef();
  const infoModal = useRef();

  const [productToRemove, setProductToRemove] = useState(null);
  const { state, dispatch } = useContext(CartContext);

  function handleProductRemove(productId) {
    setProductToRemove(productId);
    modal.current.open();
  }

  const totalPrice = state.products.reduce(
    (acc, offer) => acc + offer.price,
    0
  );
  return (
    <div className="offers-section-container" style={{ minHeight: "55vh" }}>
      <Modal
        ref={infoModal}
        title="Item removed"
        content="The item was successfully removed from your cart."
      />

      <Modal
        ref={modal}
        title="Are you sure?"
        content="Do you want to remove this item from cart?"
        remove={true}
        onConfirm={() => {
          const actionResult = removeFromCart(productToRemove);
          dispatch(actionResult);
          modal.current.close();
          infoModal.current.open();
        }}
        onCancel={() => {
          modal.current.close();
        }}
      />
      {state.products.length === 0 ? (
        <div className="empty-cart-container">
          <p>You don't have any product added to cart!</p>
        </div>
      ) : (
        state.products.map((offer) => {
          return (
            <div key={offer.id} className="offers-card-container">
              <h2 className="offers-title">{offer.name}</h2>
              <p className="offers-description">{offer.description}</p>
              <p className="offers-price">Price: {offer.price} $</p>
              <button
                onClick={() => {
                  handleProductRemove(offer.id);
                }}
                className="delete-btn"
              >
                Delete
                <DeleteIcon />
              </button>
            </div>
          );
        })
      )}
      {state.products.length > 0 && (
        <>
          <div className="empty-cart-container">
            <p className="empty-cart-container">
              Total price : {totalPrice.toFixed(2)}$
            </p>
          </div>
          <Link to="/PayPage">
            <button className="btn-primary btn">Pay</button>
          </Link>
        </>
      )}
    </div>
  );
}
