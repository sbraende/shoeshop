import { Link, NavLink } from "react-router-dom";
import styles from "./SiteHeader.module.css";
import Search from "../Search/Search";
import { getCartContext } from "../../context/cartContext";
import { getAuthContext } from "../../context/authContext";

const SiteHeader = ({ setDisplayCart }) => {
  const { user } = getAuthContext();
  const { cart } = getCartContext();

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
        {user ? (
          <Link to={"/myaccount"}>
            <img className={styles.icon} src="/icons/user.svg" alt="Profile" />
          </Link>
        ) : (
          <Link to={"/signin"}>
            <img
              className={styles.icon}
              src="/icons/user-circle.svg"
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
