import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../store/context";
import { addToCart } from "../store/action";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";

export default function OffersCard({ name, description, price, id }) {
  const { dispatch } = useContext(CartContext);
  const modal = useRef();
  const timer = useRef();

  const location = useLocation();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [location.pathname]);

  function handleAddToCart(product) {
    const actionResult = addToCart(product);
    dispatch(actionResult);

    modal.current.open();

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      if (modal.current) modal.current.close();
    }, 3000);
  }

  return (
    <div id={id} className="offers-card-container">
      <Modal ref={modal} title="Added to cart!" content={name} link={true} />
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
    </div>
  );
}
