import styles from "./Home.module.css";
import ProductList from "../../components/ProductList/ProductList";
import shoeList from "../../data/shoeData";

const Home = () => {
  const popularShoesList = [...shoeList]
    .sort((a, b) => b.meta.views - a.meta.views)
    .slice(0, 4);

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
        <ProductList shoeList={popularShoesList} title={"Popular now"} />
        <ProductList shoeList={shoeList} title={"All shoes"} />
      </section>
    </div>
  );
};

export default Home;
