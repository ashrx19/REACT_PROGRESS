import React, { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>click</button>

      {showModal && (
        <div className="overlay" onClick={closeModal}>
          <div className="Modal-box" onClick={(e) => e.stopPropagation()}>
            <p>Hello everyone!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
