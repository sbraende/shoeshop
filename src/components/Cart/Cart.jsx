import styles from "./Cart.module.css";
import CartProduct from "../CartProduct/CartProduct";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { getCartContext } from "../../context/cartContext";

const Cart = ({ setDisplayCart }) => {
  // Hooks
  const { cart } = getCartContext();
  const navigate = useNavigate();

  // Logic
  // Turn scrolling off on <body>
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleCheckout = () => {
    navigate(`/checkout`);
    setDisplayCart(false);
  };

  const total = `£${cart.reduce(
    (accumulator, p) => accumulator + p.count * p.product.price,
    0
  )}`;

  // JSX-markup
  return (
    <div className={styles.cart}>
      <div className={styles.cartContent}>
        <header className={styles.header}>
          <h3>Your cart</h3>
          <button onClick={() => setDisplayCart(false)}>
            <img src="/icons/xmark.svg" />
          </button>
        </header>
        <div className={styles.productList}>
          {cart.map((p) => (
            <CartProduct
              key={p.product.id}
              product={p.product}
              count={p.count}
              setDisplayCart={setDisplayCart}
            />
          ))}
        </div>
        <div className={styles.drawer}>
          <div className={styles.shippingContainer}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={styles.totalContainer}>
            <span>
              <strong>Total</strong>
            </span>
            <span>
              <strong>{total}</strong>
            </span>
          </div>
          <div className={styles.checkoutContainer}>
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
          <div className={styles.continueShoppingContainer}>
            <button
              className={styles.continueShoppingButton}
              onClick={() => setDisplayCart(false)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
