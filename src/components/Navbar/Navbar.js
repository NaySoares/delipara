import NextLink from "next/link";
import { List } from "@phosphor-icons/react";

import styles from "./Navbar.module.css";

export const Navbar = ({ path }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.box}>
          <h2>
            <b>DeliPará</b>
          </h2>
        </div>

        <div className={styles.box}>
          <NextLink href="/" path={path}>
            teste
          </NextLink>
        </div>
      </div>
    </div>
  );
};