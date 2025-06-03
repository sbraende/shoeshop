import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ProductList.module.css";

const ProductList = ({ title, shoeList }) => {
  return (
    <div className={styles.productListContainer}>
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
      </div>
      <ul className={styles.productList}>
        {shoeList.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
