import styles from "./App.module.css";

import { Outlet, useLocation, useParams } from "react-router-dom";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const page = useLocation();

  return (
    <>
      {displayCart && (
        <Cart setDisplayCart={setDisplayCart} displayCart={displayCart} />
      )}
      {page.pathname !== "/checkout" && (
        <SiteHeader setDisplayCart={setDisplayCart} />
      )}

      <Outlet />
    </>
  );
}

export default App;
