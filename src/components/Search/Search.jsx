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
  };

  return (
    <form role="search" onSubmit={handleSubmit}>
      <search className={styles.search}>
        <textarea
          className={styles.input}
          type="search"
          name="search"
          id="search"
          placeholder="try 'Shoes for hiking in the mountains'"
          maxLength={120}
          autoComplete="off"
          autoCorrect="off"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          <img className={styles.icon} src="/icons/search.svg" alt="Search" />
        </button>
      </search>
    </form>
  );
};

export default Search;
