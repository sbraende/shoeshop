import styles from "./Home.module.css";
import Search from "../../components/Search/Search";

const Home = () => {
  // console.log(database);

  // useEffect(() => {
  //   addDoc(collection(database, "test"), {
  //     platform: "PS5",
  //   });
  // }, []);

  // const userQuery =
  //   "I need a comfortable running shoe for running in the mountains";

  // const prompt = `
  // You are a helpful shoe recommendation assistant. Based on the following shoe inventory and the user's request, recommend one shoe that best fits their needs. Respond with a JSON object following this schema: { "response": "...", "shoeID": number }.

  // Shoe Inventory:
  // ${JSON.stringify(shoeList)}

  // User Request:
  // ${userQuery}
  // `;

  // const testAI = async () => {
  //   const response = await ai.models.generateContent({
  //     model: "gemini-2.0-flash",
  //     contents: prompt,
  //     config: {
  //       responseMimeType: "application/json",
  //       responseSchema: {
  //         type: Type.OBJECT,
  //         properties: {
  //           response: { type: Type.STRING },
  //           shoeID: { type: Type.STRING },
  //         },
  //         propertyOrdering: ["response", "shoeID"],
  //       },
  //     },
  //   });

  //   const responseData = JSON.parse(response.text);
  //   console.log(responseData);
  // };
  // testAI();

  // const connectToBackend = async () => {
  //   const request = await fetch("http://localhost:3001/");
  //   const data = await request.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   connectToBackend();
  // }, []);

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
