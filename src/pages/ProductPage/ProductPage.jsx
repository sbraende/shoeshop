import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import shoeList from "../../data/shoeData";
import Button from "../../components/Button/Button";
import { getCartContext } from "../../context/cartContext";

const ProductPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const variantId = queryParams.get("variant");

  const { dispatchCart } = getCartContext();

  const product = shoeList.find((p) => p.id === productId);

  const handleBuyButton = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatchCart({
      type: "addedProduct",
      payload: { product, variantId },
    });
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.productImagesContainer}>
        <img
          className={styles.productImage}
          src={product.imageURL}
          alt={product.name}
        />
      </div>
      <div className={styles.productDetailsContainer}>
        <h2>{product.name}</h2>
        <h3>£{product.price}</h3>
        <p>
          Tax Included. <Link to={"/policies/shipping-policy"}>Shipping</Link>{" "}
          calcualted at checkout.
        </p>
        <div>
          {product.variantProperties.map((currentVariantProperty) => (
            <div key={crypto.randomUUID()} className={styles.sizeContainer}>
              <p>{currentVariantProperty}</p>
              <div className={styles.variationLinkContainer}>
                {product.variant.map((v) => (
                  <Link
                    className={
                      v.id === variantId
                        ? `${styles.active} ${styles.variationLink}`
                        : `${styles.variationLink}`
                    }
                    key={`${product.id}${v.id}`}
                    to={`/products/${product.id}?variant=${v.id}`}
                  >
                    {v[currentVariantProperty]}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Button onClick={handleBuyButton}>Add to cart</Button>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
