import React, { useState } from 'react';
import Modal from './Modal.jsx';
import Background from './Background.jsx';

const Todos = ({text}) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const removeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className='card'>
      <h3>{text}</h3>
      <div className="actions">
        <button className="btn" onClick={showModalHandler}>delete</button>
      </div>
      {showModal && <Background onClick={removeModalHandler} />}
      {showModal && <Modal onClose={removeModalHandler} />}
    </div>
  );
};

export default Todos;
