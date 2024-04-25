'use client';

import Image from 'next/image'
import styles from './Card.module.css'
import Link from 'next/link'
import { useCartItem } from '@/context/CartContext'

export const Card = ({ name, price, description, src, id }) => {

  const { addItemCart } = useCartItem();

  const handleAddItemCart = (name, price, src, id) => {
    addItemCart({ name, price, src, id });
  }

  return (
    /*<Link href="/product">*/
    <div className={styles.container} onClick={() => handleAddItemCart(name, price, src, id)}>
      <div className={styles.coverImage}>
        <Image
          src={src}
          alt="cover"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>R$ {price}</p>
      </div>
    </div>
    /*</Link>*/
  );
}