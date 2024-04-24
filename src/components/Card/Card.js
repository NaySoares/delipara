import Image from 'next/image'
import styles from './Card.module.css'

export const Card = ({ name, price, description, src }) => {
  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        <Image
          src={src}
          alt="cover"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>R$ {price}</p>
      </div>
    </div>
  );
}