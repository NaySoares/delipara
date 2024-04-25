import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./product.module.css";

export default function Product() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.wrapper}>

        <aside className={styles.cart}>
          <h1>teste</h1>
        </aside>
      </div>
    </main>
  );
}
