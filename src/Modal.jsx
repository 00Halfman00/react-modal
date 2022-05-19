import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <h4>For sure, thoug?</h4>
      <button className="btn btn-alt" onClick={onClose}>
        cancel
      </button>
      <button className="btn" onClick={onClose}>
        confirm
      </button>
    </div>
  );
};

export default Modal;
