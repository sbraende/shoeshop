import styles from "./Search.module.css";

const Search = () => {
  return (
    <form>
      <div className={styles.search}>
        <img className={styles.icon} src="/icons/search.svg" alt="Search" />
        <input
          className={styles.input}
          type="search"
          name="search"
          id="search"
          placeholder="AI Search, try - 'Shoes for hiking in the mountains'"
          maxLength={120}
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </form>
  );
};

export default Search;
