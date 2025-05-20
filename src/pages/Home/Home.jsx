import { database } from "../../../firebase.config";
import styles from "./Home.module.css";
import { addDoc, collection } from "firebase/firestore";
import { ai } from "../../../gemini.config";
import shoeList from "../../data/shoeData";
import { Type } from "@google/genai";
import Search from "../../components/Search/Search";

const Home = () => {
  // console.log(database);

  // useEffect(() => {
  //   addDoc(collection(database, "test"), {
  //     platform: "PS5",
  //   });
  // }, []);

  const userQuery =
    "I need a comfortable running shoe for running in the mountains";

  const prompt = `
  You are a helpful shoe recommendation assistant. Based on the following shoe inventory and the user's request, recommend one shoe that best fits their needs. Respond with a JSON object following this schema: { "response": "...", "shoeID": number }.

  Shoe Inventory:
  ${JSON.stringify(shoeList)}

  User Request:
  ${userQuery}
  `;

  const testAI = async () => {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            response: { type: Type.STRING },
            shoeID: { type: Type.STRING },
          },
          propertyOrdering: ["response", "shoeID"],
        },
      },
    });

    const responseData = JSON.parse(response.text);
    console.log(responseData);
  };
  // testAI();

  return (
    <div className={styles.home}>
      <section className={styles.sectionSearch}>
        <Search />
      </section>
      <section className={styles.sectionPopularNow}>
        <h2>POPULAR NOW</h2>
      </section>
    </div>
  );
};

export default Home;
