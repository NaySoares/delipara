'use client'

import { useCartItem } from "@/context/CartContext";
import styles from "./Cart.module.css";
import { ItemCart } from "./ItemCart";

export const Cart = () => {
  const { cartItens, total, buyItems } = useCartItem()

  const handleClick = () => {
    buyItems();
  }

  return (
    <div className={styles.container}>
      <div className={styles.listItems}>
        <h2>Seu Carrinho</h2>
        {cartItens.length > 0 ? cartItens.map((item) => (
          <ItemCart
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            src={item.src}
          />
        )) : <p className={styles.EmptyCart}>Carrinho vazio</p>}
      </div>
      <footer className={styles.footerCart}>
        <p>Total: R$ {total}</p>
        <button onClick={() => handleClick()}>Comprar</button>
      </footer>
    </div>
  );
}