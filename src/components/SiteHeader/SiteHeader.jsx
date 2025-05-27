import { Link, NavLink } from "react-router-dom";
import styles from "./SiteHeader.module.css";
import Search from "../Search/Search";

const SiteHeader = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.upperRow}>
        <div className={styles.columnLeft}>
          <Link className={styles.logoContainer} to={"/"}>
            <img className={styles.logo} src="/logo/stride-labs-logo.png" />
          </Link>
        </div>
        <div className={styles.columnCenter}>
          <Search />
        </div>
        <div className={styles.columnRight}>
          <Link to={"/signin"}>
            <img
              className={styles.icon}
              src="/icons/profile-circle.svg"
              alt="Profile"
            />
          </Link>
          <Link>
            <img
              className={styles.icon}
              src="/icons/shopping-bag.svg"
              alt="Cart"
            />
          </Link>
        </div>
      </div>
      <div className={styles.lowerRow}>
        <nav className={styles.nav}>
          <NavLink className={styles.navLink}>SHOES</NavLink>
          <NavLink className={styles.navLink}>CLOTHING</NavLink>
          <NavLink className={styles.navLink}>ACCESSORIES</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
