import NextLink from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./Navbar.module.css";

export const Navbar = ({ path }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.box}>
          <NextLink href="/" path={path}>
            <h2>DeliPará</h2>
          </NextLink>
        </div>

        <div className={styles.box}>
          <NextLink href="/" path={path}>
            <RxHamburgerMenu size={28} />
          </NextLink>
        </div>
      </div>
    </div>
  );
};