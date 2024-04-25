'use client';

import { createContext, useState, useContext } from 'react'

/*interface cartItem {
  id: number;
  price: number;
  name: string;
  src: string;
}*/

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cartItens, setCartItens] = useState([])
  const [total, setTotal] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  async function addItemCart({ id, name, price, src }) {
    const cartItem = {
      id,
      name,
      price,
      src
    }

    setCartItens([
      ...cartItens,
      cartItem,
    ]);

    setTotal(total + price);
  }

  async function removeItemCart(id) {
    const newCart = cartItens.filter(item => item.id !== id);

    setTotal(total - cartItens.find(item => item.id === id).price);

    setCartItens(newCart);

    alert('Item removido do carrinho')
  }

  async function buyItems() {
    if (cartItens.length === 0) {
      return alert('Adicione itens ao carrinho');
    }

    setCartItens([]);
    setTotal(0);
    alert('Compra realizada com sucesso!');
  }

  async function openModal(name, price, src, id) {
    setIsOpenModal(true);
    setModalItem({ name, price, src, id });
  }

  async function closeModal() {
    setIsOpenModal(false);
    setModalItem({});
  }

  return (
    <CartContext.Provider value={{ closeModal, openModal, isOpenModal, modalItem, buyItems, total, cartItens, addItemCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartItem() {
  const context = useContext(CartContext);

  return context;
}