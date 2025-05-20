import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const handleBuyButton = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add product to basket");
  };

  return (
    <li className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <img
          src={`/images/shoes/salomon-genesis.webp`}
          alt={`Image of product`}
          className={styles.productImage}
        />
        <h5 className={styles.title}>{`${product.brand} ${product.name}`}</h5>
        <div className={styles.detailsRow}>
          <span className={styles.price}>{`£${product.price.toFixed(2)}`}</span>
          <button className={styles.buyButton} onClick={handleBuyButton}>
            Buy
          </button>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
