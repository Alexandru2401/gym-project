import { forwardRef, useImperativeHandle, useRef } from "react";
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
  return (
    <dialog ref={modalRef} style={{ width: "200px" }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <form method="dialog">
        <button>Close</button>
      </form>
      <Link to="/cart">Go to cart</Link>
    </dialog>
  );
});

export default Modal;
