import styles from "./Home.module.css";
import ProductList from "../../components/ProductList/ProductList";
import shoeList from "../../data/shoeData";

const Home = () => {
  return (
    <div className={styles.home}>
      <section
        className={`${styles.section} ${styles.sectionSearch}`}
      ></section>

      <section className={styles.section}>
        <ProductList shoeList={shoeList} title={"Popular now"} />
      </section>
    </div>
  );
};

export default Home;
