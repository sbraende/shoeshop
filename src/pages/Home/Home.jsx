import styles from "./Home.module.css";
import ProductList from "../../components/ProductList/ProductList";
import shoeList from "../../data/shoeData";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <img
          className={styles.bannerImage}
          src="/images/section/search/isaac-wendland-YbubEOFyKZU-unsplash.jpg"
          alt=""
        />
      </div>
      <section className={styles.section}>
        <ProductList shoeList={shoeList} title={"Popular now"} />
      </section>
    </div>
  );
};

export default Home;
