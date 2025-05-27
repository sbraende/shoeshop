import { createContext, useContext } from "react";
import { getAuthContext } from "./authContext";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firestore.config";

const userDataContext = createContext();

const UserDataContext = ({ children }) => {
  const { user } = getAuthContext();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) return;

    const getCurrentUserData = async () => {
      try {
        const currentUserDoc = await getDoc(doc(db, "users", user.uid));
        setUserData(currentUserDoc.data());
      } catch (error) {
        console.error("Failed to fetch user document:", error);
      }
    };
    getCurrentUserData();

    setUserData();
  }, [user]);

  return (
    <userDataContext.Provider value={userData}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserDataContext;

export const getUserContext = () => useContext(userDataContext);
