import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../auth.config";
import { onAuthStateChanged } from "@firebase/auth";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};

export const getAuthContext = () => useContext(authContext);
