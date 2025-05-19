import { NavLink } from "react-router-dom";
import styles from "./SiteHeader.module.css";

const SiteHeader = () => {
  return (
    <header className={styles.siteHeader}>
      <NavLink className={styles.columnLeft}>
        <h1>SHOE</h1>
        <h1>ITCH</h1>
      </NavLink>
      <div className={styles.columnCenter}>
        <nav className={styles.nav}>
          <NavLink>SHOES</NavLink>
          <NavLink>CLOTHING</NavLink>
          <NavLink>ACCESSORIES</NavLink>
        </nav>
      </div>
      <div className={styles.columnRight}>
        <button>
          <img className={styles.icon} src="/icons/cart.svg" alt="Profile" />
        </button>
        <button>
          <img className={styles.icon} src="/icons/user.svg" alt="Cart" />
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
