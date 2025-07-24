import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
const Modal = forwardRef(({ title, content }, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
      close() {
        modalRef.current.close();
      },
    };
  });
  return createPortal(
    <dialog ref={modalRef} style={{ width: "200px" }}>
      <h2 className="modal-title">{title}</h2>
      <p className="modal-content">{content}</p>
      <form method="dialog">
        <button className="close-modal btn-primary">Close</button>
      </form>

      <Link to="/cart" className="modal-cart-link btn-secondary">
        Go to cart
      </Link>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
