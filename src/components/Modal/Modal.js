'use client';

import { useState } from 'react';
import styles from './Modal.module.css';

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>

      <div className={styles.container
      } >
        <div className={styles.modal}>
          <h2>Modal</h2>
          <p>Conteúdo do modal</p>
          <button onClick={() => toggleModal()}>Fechar</button>
        </div>
      </div >

    </>
  );
}