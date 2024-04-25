import { Navbar } from "@/components/Navbar/Navbar";
import { Card } from "@/components/Card/Card";
import { Cart } from "@/components/Cart/Cart";
import { Food } from "@/services/food";
import { CartProvider } from "@/context/CartContext";

import styles from "./page.module.css";
import { Modal } from "@/components/Modal/modal";

export default function Home() {
  return (
    <CartProvider>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.wrapper}>
          <section className={styles.letter}>
            <div className={styles.inlineSection}>
              {Food.map((food) => (
                <Card
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  description={food.description}
                  price={food.price}
                  src={food.src}
                />
              ))}
            </div>
          </section>

          <aside className={styles.aside}>
            <Cart />
          </aside>
        </div>
      </main>
    </CartProvider>
  );
}
