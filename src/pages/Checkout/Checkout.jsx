import formStyles from "../../styles/FormStyles.module.css";
import styles from "./Checkout.module.css";
import { getCartContext } from "../../context/cartContext";
import RequiredField from "../../components/RequiredField/RequiredField";
import { Link } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import useCheckoutValidation from "../../hooks/useCheckoutValidation";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAuthContext } from "../../context/authContext";
import { db } from "../../../firestore.config";

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    address2: "",
    city: "",
    postcode: "",
  });
  const { cart, dispatchCart } = getCartContext();
  const { errors, validateCheckout } = useCheckoutValidation();
  const { user } = getAuthContext();

  const total = `£${cart.reduce(
    (accumulator, p) => accumulator + p.count * p.product.price,
    0
  )}`;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCheckoutData((prevCheckoutData) => ({
      ...prevCheckoutData,
      [name]: value,
    }));
  };

  const generateOrderNumber = () => {
    const date = new Date().toISOString().slice(2, 10).replace(/-/g, "");
    const random = crypto.randomUUID().slice(0, 6);
    return `ORD-${date}-${random}`;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    // Validate
    if (!validateCheckout(checkoutData)) {
      console.log("Form not submitted");
      return;
    }

    console.log("Form approved");

    // Store data in Firestore
    try {
      console.log("Adding to db");

      await addDoc(collection(db, "orders"), {
        order: cart,
        userId: user.uid,
        email: checkoutData.email,
        orderNumber: generateOrderNumber(),
        status: "paid",
        total: total,
        shippingAddress: {
          firstName: checkoutData.firstName,
          lastname: checkoutData.lastName,
          company: checkoutData.company,
          address: checkoutData.address,
          address2: checkoutData.address2,
          city: checkoutData.city,
          postcode: checkoutData.postcode,
        },
        timestamp: serverTimestamp(),
      });
      console.log("Added successfulyy");
    } catch (error) {
      console.log("Error submitting order: ", error);
    }

    // Navigate to order complete page / just have a state to complete order?

    // Clear cart
    // dispatchCart({ type: "clearCart" });
    // setCheckoutData({
    //   email: "",
    //   firstName: "",
    //   lastName: "",
    //   address: "",
    //   address2: "",
    //   city: "",
    //   postcode: "",
    // });
  };

  return (
    <div className={styles.checkout}>
      <header className={styles.header}>
        <Link className={styles.logoContainer} to={"/"}>
          <img src="/logo/stride-labs-logo.png" alt="Stride Labs logo" />
        </Link>
      </header>
      <h2>Checkout</h2>
      <div className={styles.checkoutMain}>
        <div className={styles.checkoutDetails}>
          <form noValidate className={styles.form} onSubmit={handleSubmitOrder}>
            <fieldset className={formStyles.fieldset}>
              <legend className={formStyles.legend}>Contact</legend>
              <div className={formStyles.formGroup}>
                <label htmlFor="email">
                  Email <RequiredField />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  maxLength={80}
                  onChange={handleInput}
                />
                {errors && <p className="error">{errors.email}</p>}
              </div>
            </fieldset>
            <fieldset className={formStyles.fieldset}>
              <legend className={formStyles.legend}>Delivery</legend>

              <div className={formStyles.formGroup}>
                <label htmlFor="firstName">
                  First name <RequiredField />
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  maxLength={80}
                  onChange={handleInput}
                />
                {errors && <p className="error">{errors.firstName}</p>}
              </div>

              <div className={formStyles.formGroup}>
                <label htmlFor="lastName">
                  Last name <RequiredField />
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  maxLength={80}
                  onChange={handleInput}
                />
                {errors && <p className="error">{errors.lastName}</p>}
              </div>

              <div className={formStyles.formGroup}>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  maxLength={80}
                  onChange={handleInput}
                />
              </div>

              <div className={formStyles.formGroup}>
                <label htmlFor="address">
                  Address <RequiredField />
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  maxLength={80}
                  onChange={handleInput}
                />
                {errors && <p className="error">{errors.address}</p>}
              </div>

              <div className={formStyles.formGroup}>
                <label htmlFor="address2">Apartment, suite, etc.</label>
                <input
                  type="text"
                  name="address2"
                  id="address2"
                  maxLength={80}
                  onChange={handleInput}
                />
              </div>

              <div className={formStyles.formGroup}>
                <label htmlFor="city">
                  City <RequiredField />
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  maxLength={80}
                  onChange={handleInput}
                />
                {errors && <p className="error">{errors.city}</p>}
              </div>

              <div className={formStyles.formGroup}>
                <label htmlFor="postcode">
                  Postcode <RequiredField />
                </label>
                <input
                  type="text"
                  name="postcode"
                  id="postcode"
                  maxLength={80}
                  onChange={handleInput}
                />
                {errors && <p className="error">{errors.postcode}</p>}
              </div>
            </fieldset>

            <button type="submit" className={formStyles.submitButton}>
              Submit order
            </button>
            <Link className={formStyles.link} to={"/signin"}>
              Continue shopping
            </Link>
          </form>
        </div>
        <div className={styles.cartSidebar}>
          <h3>Cart content</h3>
          <div className={styles.productList}>
            {cart.map((p) => (
              <CartProduct
                key={p.product.id}
                product={p.product}
                count={p.count}
              />
            ))}
            <div className={styles.totalContainer}>
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>{total}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
