import styles from "./Home.module.css";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
  return (
    <div className={styles.home}>
      <section
        className={`${styles.section} ${styles.sectionSearch}`}
      ></section>

      <section className={`${styles.section} ${styles.sectionPopularNow}`}>
        <h2 className={styles.sectionHeader}>POPULAR NOW</h2>
        <ProductList />
        <h2 className={styles.sectionHeader}>IN SEASON</h2>
        <ProductList />
      </section>
    </div>
  );
};

export default Home;
