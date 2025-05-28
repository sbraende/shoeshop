import styles from "./Counter.module.css";

const Counter = ({ count = 0 }) => {
  return (
    <div className={styles.counter}>
      <button>
        <img src="/icons/minus.svg" alt="" />
      </button>
      <span>{count}</span>
      <button>
        <img src="/icons/plus.svg" alt="" />
      </button>
    </div>
  );
};

export default Counter;
