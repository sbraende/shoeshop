import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import shoeList from "../../data/shoeData";
import Counter from "../../components/Counter/Counter";
import Button from "../../components/Button/Button";
import { getCartContext } from "../../context/cartContext";

const ProductPage = () => {
  const { productId } = useParams();
  const { dispatchCart } = getCartContext();

  const product = shoeList.find((p) => p.id === productId);

  const handleBuyButton = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatchCart({
      type: "addedProduct",
      payload: product,
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
        <div className={styles.sizeContainer}>
          <p>Shoe size</p>
          <ul className={styles.sizeList}>
            <li>
              <button>37</button>
            </li>
            <li>
              <button className={styles.active}>38</button>
            </li>
            <li>
              <button>39</button>
            </li>
          </ul>
        </div>
        {/* <div className={styles.quantityContainer}>
          <p>Quantity</p>
          <Counter count={0} />
        </div> */}
        <Button onClick={handleBuyButton}>Add to cart</Button>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
