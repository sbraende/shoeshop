import styles from "./Counter.module.css";

const Counter = ({ count = 0, handleIncrement, handleDecrement }) => {
  return (
    <div className={styles.counter}>
      <button onClick={handleDecrement}>
        <img src="/icons/minus.svg" alt="" />
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement}>
        <img src="/icons/plus.svg" alt="" />
      </button>
    </div>
  );
};

export default Counter;
