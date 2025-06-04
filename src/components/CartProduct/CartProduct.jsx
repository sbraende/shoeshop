import { useNavigate } from "react-router-dom";
import styles from "./CartProduct.module.css";
import Counter from "../Counter/Counter";
import { getCartContext } from "../../context/cartContext";
import findVariantDetails from "../../utilities/findVariantDetails";

const CartProduct = ({ p, setDisplayCart }) => {
  const { dispatchCart } = getCartContext();
  const navigate = useNavigate();

  const handleProductLink = () => {
    navigate(`/products/${p.product.id}?variant=${p.variantId}`);
    setDisplayCart(false);
  };

  const handleRemoveProduct = () => {
    dispatchCart({
      type: "removedProduct",
      payload: { product: p.product, variantId: p.variantId },
    });
  };

  const handleDecrement = () => {
    dispatchCart({
      type: "decrementProductCount",
      payload: { product: p.product, variantId: p.variantId },
    });
  };

  const handleIncrement = () => {
    dispatchCart({
      type: "incrementProductCount",
      payload: { product: p.product, variantId: p.variantId },
    });
  };

  const variantDetails = findVariantDetails(p, p.variantId);

  return (
    <div className={styles.productContainer}>
      <button className={styles.imageContainer} onClick={handleProductLink}>
        <img src={p.product.imageURL} alt="Product image" />
      </button>
      <div className={styles.productDetailsContainer}>
        <div className={styles.productInfoContainer}>
          <div className={styles.productInfoTextContainer}>
            <button className={styles.productName} onClick={handleProductLink}>
              {`${p.product.brand} ${p.product.name}`}
            </button>
            {Object.entries(variantDetails).map(([property, value]) => (
              <p key={property}>
                {property}: {value}
              </p>
            ))}
          </div>
          <button className={styles.deleteButton} onClick={handleRemoveProduct}>
            <img src="/icons/trash.svg" alt="Delete icon" />
          </button>
        </div>
        <div className={styles.productCountContainer}>
          <Counter
            handleIncrement={handleIncrement}
            count={p.count}
            handleDecrement={handleDecrement}
          />
          <p>{`£${p.count * p.product.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
