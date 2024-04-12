import React, { useState } from 'react';
import Modal from './Modal';
import "./App.css"

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='modal'>
      <button id='open' onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <div className='modal'>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        </div>

      </Modal>
    </div>
  );
};

export default App;