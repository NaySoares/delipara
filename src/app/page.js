import { Navbar } from "@/components/Navbar/Navbar";
import { Card } from "@/components/Card/Card";
import styles from "./page.module.css";
import { Food } from "@/services/food";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1> Hello world</h1>
      <h1> Hello world</h1>
      <section className={styles.letter}>
        <div className={styles.inlineSection}>
          {Food.map((food) => (
            <Card
              key={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
              src={food.src}
            />
          ))}
        </div>

        <div className={styles.inlineSection}>
          {Food.map((food) => (
            <Card
              key={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
              src={food.src}
            />
          ))}
        </div>
      </section>

      <aside className={styles.cart}>
      </aside>
    </main>
  );
}
