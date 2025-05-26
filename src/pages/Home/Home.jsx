import styles from "./Home.module.css";
import Search from "../../components/Search/Search";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={`${styles.section} ${styles.sectionSearch}`}>
        {/* <Search /> */}
      </section>

      <section className={`${styles.section} ${styles.sectionPopularNow}`}>
        <h2 className={styles.sectionHeader}>POPULAR NOW</h2>
        <ProductList />
      </section>
    </div>
  );
};

export default Home;
