import { Link, NavLink } from "react-router-dom";
import styles from "./SiteHeader.module.css";
import Search from "../Search/Search";
import { getUserContext } from "../../context/userDataContext";
import { getCartContext } from "../../context/cartContext";

const SiteHeader = ({ setDisplayCart }) => {
  const { cart } = getCartContext();
  const userData = getUserContext();

  const itemsInCartTotal = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.count,
    0
  );

  return (
    <header className={styles.siteHeader}>
      <div className={styles.logoContainer}>
        <Link className={styles.logoLink} to={"/"}>
          <img className={styles.logoImg} src="/logo/stride-labs-logo.png" />
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
      <div className={styles.navigationItemsContainer}>
        {userData ? (
          <Link to={"/profile"}>
            <img
              className={styles.icon}
              src="/icons/profile-circle.svg"
              alt="Profile"
            />
          </Link>
        ) : (
          <Link to={"/signin"}>
            <img
              className={styles.icon}
              src="/icons/profile-circle.svg"
              alt="Profile"
            />
          </Link>
        )}

        <button
          className={styles.cartButton}
          onClick={() => setDisplayCart(true)}
        >
          <img
            className={styles.icon}
            src="/icons/shopping-bag.svg"
            alt="Cart"
          />
          {itemsInCartTotal > 0 ? <span>{itemsInCartTotal}</span> : ""}
        </button>
      </div>
      <nav className={styles.navContainer}>
        <NavLink className={styles.navLink}>SHOES</NavLink>
        <NavLink className={styles.navLink}>CLOTHING</NavLink>
        <NavLink className={styles.navLink}>ACCESSORIES</NavLink>
      </nav>
    </header>
  );
};

export default SiteHeader;
