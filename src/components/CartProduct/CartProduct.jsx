import { useNavigate } from "react-router-dom";
import styles from "./CartProduct.module.css";
import Counter from "../Counter/Counter";
import { getCartContext } from "../../context/cartContext";

const CartProduct = ({ product, setDisplayCart }) => {
  const { dispatchCart } = getCartContext();
  const navigate = useNavigate();

  const handleProductLink = () => {
    navigate(`/product/${product.id}`);
    setDisplayCart(false);
  };

  const handleRemoveProduct = () => {
    dispatchCart({ type: "removedProduct", payload: product });
  };

  const handleDecrement = () => {
    dispatchCart({ type: "decrementProductCount", payload: product });
  };

  const handleIncrement = () => {
    dispatchCart({ type: "incrementProductCount", payload: product });
  };

  return (
    <div className={styles.productContainer}>
      <button className={styles.imageContainer} onClick={handleProductLink}>
        <img src="/images/shoes/salomon-genesis.webp" alt="" />
      </button>
      <div className={styles.productDetailsContainer}>
        <div className={styles.productInfoContainer}>
          <div className={styles.productInfoTextContainer}>
            <button className={styles.productName} onClick={handleProductLink}>
              {product.name}
            </button>
            <p>shoe size/color</p>
            <p>size</p>
          </div>
          <button className={styles.deleteButton} onClick={handleRemoveProduct}>
            <img src="/icons/trash.svg" alt="Delete icon" />
          </button>
        </div>
        <div className={styles.productCountContainer}>
          <Counter
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <p>£250</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
