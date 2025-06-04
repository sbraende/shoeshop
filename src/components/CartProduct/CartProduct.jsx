import { useNavigate } from "react-router-dom";
import styles from "./CartProduct.module.css";
import Counter from "../Counter/Counter";
import { getCartContext } from "../../context/cartContext";
import findVariantDetails from "../../utilities/findVariantDetails";

const CartProduct = ({ cartItem, setDisplayCart }) => {
  const { dispatchCart } = getCartContext();
  const navigate = useNavigate();

  const handleProductLink = () => {
    navigate(`/products/${cartItem.product.id}?variant=${cartItem.variantId}`);
    setDisplayCart(false);
  };

  const handleRemoveProduct = () => {
    dispatchCart({
      type: "removedProduct",
      payload: { product: cartItem.product, variantId: cartItem.variantId },
    });
  };

  const handleDecrement = () => {
    dispatchCart({
      type: "decrementProductCount",
      payload: { product: cartItem.product, variantId: cartItem.variantId },
    });
  };

  const handleIncrement = () => {
    dispatchCart({
      type: "incrementProductCount",
      payload: { product: cartItem.product, variantId: cartItem.variantId },
    });
  };

  const variantDetails = findVariantDetails(cartItem, cartItem.variantId);

  return (
    <div className={styles.productContainer}>
      <button className={styles.imageContainer} onClick={handleProductLink}>
        <img src={cartItem.product.imageURL} alt="Product image" />
      </button>
      <div className={styles.productDetailsContainer}>
        <div className={styles.productInfoContainer}>
          <div className={styles.productInfoTextContainer}>
            <button className={styles.productName} onClick={handleProductLink}>
              {`${cartItem.product.brand} ${cartItem.product.name}`}
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
            count={cartItem.count}
            handleDecrement={handleDecrement}
          />
          <p>{`£${(cartItem.count * cartItem.product.price).toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
