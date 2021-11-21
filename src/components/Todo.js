import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIdOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIdOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIdOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
