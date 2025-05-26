import { useLocation } from "react-router";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

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

  return <div>Results for: {query}</div>;
};

export default SearchResults;
