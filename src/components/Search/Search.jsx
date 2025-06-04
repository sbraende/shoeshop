import { useNavigate } from "react-router";
import styles from "./Search.module.css";
import { useState } from "react";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  };

  return (
    <search className={styles.search}>
      <form role="search" onSubmit={handleSubmit} className={styles.form}>
        <textarea
          className={styles.input}
          type="search"
          name="search"
          id="search"
          placeholder="Try AI Search: 'Shoes for hiking in the mountains'"
          maxLength={120}
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit" className={styles.searchButton}>
          <img className={styles.icon} src="/icons/search.svg" alt="Search" />
        </button>
      </form>
    </search>
  );
};

export default Search;
