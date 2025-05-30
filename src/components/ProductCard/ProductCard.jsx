import { getCartContext } from "../../context/cartContext";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { dispatchCart } = getCartContext();

  const handleBuyButton = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatchCart({
      type: "addedProduct",
      payload: product,
    });
  };

  return (
    <li className={styles.productCard}>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <img
          src={product.imageURL}
          alt={product.name}
          className={styles.productImage}
        />
        <h5 className={styles.title}>{`${product.brand} ${product.name}`}</h5>
        <div className={styles.detailsRow}>
          <span className={styles.price}>{`£${product.price.toFixed(2)}`}</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
