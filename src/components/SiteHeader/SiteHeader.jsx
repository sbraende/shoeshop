import { NavLink } from "react-router-dom";
import styles from "./SiteHeader.module.css";

const SiteHeader = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.columnLeft}>
        <h1>SHOE</h1>
        <h1>ITCH</h1>
      </div>
      <div className={styles.columnCenter}>
        <nav className={styles.nav}>
          <NavLink></NavLink>
          <NavLink></NavLink>
          <NavLink></NavLink>
          <h3>SHOES</h3>
          <h3>CLOTHING</h3>
          <h3>ACCESSORIES</h3>
        </nav>
      </div>
      <div className={styles.columnRight}>
        <img className={styles.icon} src="/icons/cart.svg" alt="Profile" />
        <img className={styles.icon} src="/icons/user.svg" alt="Cart" />
      </div>
    </header>
  );
};

export default SiteHeader;
