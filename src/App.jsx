import styles from "./App.module.css";

import { Outlet } from "react-router-dom";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  return (
    <>
      {displayCart && (
        <Cart setDisplayCart={setDisplayCart} displayCart={displayCart} />
      )}
      <SiteHeader setDisplayCart={setDisplayCart} />
      <Outlet />
    </>
  );
}

export default App;
