import { useEffect } from "react";
import { database } from "../../../firebase.config";
import styles from "./Home.module.css";
import { addDoc, collection } from "firebase/firestore";
import { ai } from "../../../gemini.config";

const Home = () => {
  // console.log(database);

  // useEffect(() => {
  //   addDoc(collection(database, "test"), {
  //     platform: "PS5",
  //   });
  // }, []);

  // const testAI = async () => {
  //   const response = await ai.models.generateContent({
  //     model: "gemini-2.0-flash",
  //     contents: "Explain how AI works in a few words",
  //   });
  //   console.log(response);
  //   console.log(response.text);
  // };
  // testAI();

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
