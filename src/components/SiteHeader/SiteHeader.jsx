import { NavLink } from "react-router-dom";
import styles from "./SiteHeader.module.css";

const SiteHeader = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.columnLeft}>
        <NavLink className={`${styles.navLink} ${styles.navLinkLogo}`}>
          <h1>SHOE</h1>
        </NavLink>
      </div>
      <div className={styles.columnCenter}>
        <nav className={styles.nav}>
          <NavLink className={styles.navLink}>SHOES</NavLink>
          <NavLink className={styles.navLink}>CLOTHING</NavLink>
          <NavLink className={styles.navLink}>ACCESSORIES</NavLink>
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
