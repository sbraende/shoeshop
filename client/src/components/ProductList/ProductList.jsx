import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import shoeList from "../../data/shoeData.js";

const ProductList = () => {
  return (
    <ul className={styles.productList}>
      {shoeList.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductList;
