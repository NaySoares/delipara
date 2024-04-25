'use client';

import { useCartItem } from '@/context/CartContext';
import { Card } from '../Card/Card';

import styles from './Modal.module.css';

export const Modal = () => {
  const { isOpenModal, modalItem, closeModal } = useCartItem()

  const handlerToggleModal = () => {
    closeModal();
  }

  return (
    <>
      {isOpenModal &&
        <div className={styles.container}>
          <div className={styles.modal}>
            <h2>Modal</h2>
            <p>Conteúdo do modal</p>
            <Card name={modalItem.name} price={modalItem.price} src={modalItem.src} />
            <button onClick={() => handlerToggleModal()}>Fechar</button>
          </div>
        </div>
      }
    </>
  );
}