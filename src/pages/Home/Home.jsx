import { useEffect } from "react";
import { database } from "../../../firebase.config";
import styles from "./Home.module.css";
import { addDoc, collection } from "firebase/firestore";

const Home = () => {
  console.log(database);

  useEffect(() => {
    addDoc(collection(database, "test"), {
      platform: "PS5",
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
