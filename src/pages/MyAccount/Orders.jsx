import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import styles from "./Orders.module.css";
import { db } from "../../../firestore.config";
import { useEffect, useState } from "react";
import { getAuthContext } from "../../context/authContext";

const Orders = () => {
  const { user } = getAuthContext();
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const getOrders = async () => {
      const orders = await getDocs(
        query(
          collection(db, "orders"),
          where("email", "==", user.email),
          orderBy("timestamp", "desc")
        )
      );
      setUserOrders([]);
      orders.forEach((docRef) => {
        setUserOrders((prevUserOrders) => [...prevUserOrders, docRef.data()]);
      });
    };
    getOrders();
  }, [user]);

  const displayOrderDetails = (o) => {
    const brand = o.order.map((order) => (
      <p
        key={crypto.randomUUID()}
      >{`${order.count} x ${order.product.brand} ${order.product.name}`}</p>
    ));
    return brand;
  };

  return (
    <div className={styles.orders}>
      <h2>Orders</h2>
      <ul className={styles.ordersList}>
        {userOrders.map((o) => {
          return (
            <li key={String(o.orderNumber)} className={styles.ordersItem}>
              <img src={null} alt="" />
              <p>
                <strong>Order number:</strong> {o.orderNumber}
              </p>
              <p>Staus: {o.status}</p>
              <p>Cart: </p>
              {displayOrderDetails(o)}
              <span>Order total: {o.total}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Orders;
