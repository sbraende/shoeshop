import styles from "./Counter.module.css";

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div className={styles.counter}>
      <button onClick={handleDecrement}>
        <img src="/icons/minus.svg" alt="Decrement" />
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement}>
        <img src="/icons/plus.svg" alt="Increment" />
      </button>
    </div>
  );
};

export default Counter;
