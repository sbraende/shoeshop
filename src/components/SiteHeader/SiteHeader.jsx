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
          <img
            className={styles.logoImg}
            src="/logo/stride-labs-logo.png"
            alt="Stride Labs logo"
          />
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
      <div className={styles.navigationItemsContainer}>
        <Link to={user ? "/myaccount" : "/signin"}>
          <img className={styles.icon} src="/icons/user.svg" alt="Profile" />
        </Link>
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
    </header>
  );
};

export default SiteHeader;
