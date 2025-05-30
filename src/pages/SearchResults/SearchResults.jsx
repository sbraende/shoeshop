import styles from "./SearchResults.module.css";
import { useLocation } from "react-router";
import shoeList from "../../data/shoeData";
import { useEffect, useState } from "react";
import { ai } from "../../../gemini.config";
import { Type } from "@google/genai";
import ProductCard from "../../components/ProductCard/ProductCard";

const SearchResults = () => {
  const [aiResults, setAiResults] = useState({
    response: "",
    shoeId: "",
  });

  // Get query
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userQuery = queryParams.get("q");

  useEffect(() => {
    if (!userQuery) return;

    setAiResults({ response: "", shoeId: "" });

    // Generate prompt
    const prompt = `
      You are a helpful member of our shoe shop team, providing personalized recommendations. When suggesting a shoe, please use "we" (e.g., "We would recommend...").

      Based on the following shoe inventory and the user's request, recommend one shoe that best fits their needs. Respond with a JSON object following this schema: { "response": "...", "shoeId": number }.

      Shoe Inventory:
      ${JSON.stringify(shoeList)}

      User Request:
      ${userQuery}
      `;

    const getAiRecommendedProduct = async () => {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              response: { type: Type.STRING },
              shoeId: { type: Type.STRING },
            },
            propertyOrdering: ["response", "shoeId"],
          },
        },
      });

      const responseData = JSON.parse(response.text);
      if (responseData.shoeId === "null") responseData.shoeId = null;

      setAiResults(responseData);
      console.log(responseData);
    };
    getAiRecommendedProduct();
  }, [userQuery]);

  // Match shoe data based on ID.
  const getShoe = (shoeId) => {
    return shoeList.find((s) => parseInt(shoeId) === s.id);
  };

  if (!aiResults.response) {
    return (
      <div>
        <p>Loading search results...</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Our recommendation</h3>
      <p>{aiResults.response}</p>

      {aiResults.shoeId && (
        <ul className={styles.productList}>
          <ProductCard product={getShoe(aiResults.shoeId)} />
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
