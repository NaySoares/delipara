import Image from "next/image";
import { useCartItem } from '@/context/CartContext'
import styles from "./ItemCart.module.css";

export const ItemCart = ({ name, price, src, id }) => {

  const { removeItemCart } = useCartItem();

  const handleDeleteItem = (id) => {
    removeItemCart(id);
  };

  return (
    <div
      className={styles.container}
      onClick={() => handleDeleteItem(id)}
    >
      <div className={styles.coverImage}>
        <Image
          src={src}
          alt="cover"
          width={64}
          height={64}
        />
      </div>
      <div className={styles.content}>
        <b>{name}</b>
        <p>R$ {price}</p>
      </div>
    </div >
  );
}