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
        console.log(docRef.data());
        setUserOrders((prevUserOrders) => [...prevUserOrders, docRef.data()]);
      });
    };
    getOrders();
  }, [user]);

  return (
    <div className={styles.orders}>
      <h2>Orders</h2>
      <ul className={styles.ordersList}>
        {userOrders.map((o) => {
          return (
            <li key={String(o.orderNumber)} className={styles.ordersItem}>
              <img src={null} alt="" />
              <p>Order number: {o.orderNumber}</p>
              {/* <p>Date: {o.timestamp}</p> */}
              <p>Staus: {o.status}</p>
              <p>Order total: {o.total}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Orders;
