'use client';

import { createContext, useEffect, useState, useContext } from 'react'

/*interface Transaction {
  id: number;
  price: number;
  name: string;
  src: string;
}*/

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cartItens, setCartItens] = useState([])
  const [total, setTotal] = useState(0)

  // useEffect(() => {
  //   api.get('transactions')
  //     .then(response => setTransactions(response.data.transactions))
  // }, []);

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

  return (
    <CartContext.Provider value={{ buyItems, total, cartItens, addItemCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartItem() {
  const context = useContext(CartContext);

  return context;
}