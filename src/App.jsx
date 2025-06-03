import styles from "./App.module.css";

import { Outlet, useLocation, useParams } from "react-router-dom";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const page = useLocation();

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        {displayCart && (
          <Cart setDisplayCart={setDisplayCart} displayCart={displayCart} />
        )}
        {page.pathname !== "/checkout" && (
          <SiteHeader setDisplayCart={setDisplayCart} />
        )}
        <Outlet />
      </main>
      <Footer setDisplayCart={setDisplayCart} />
    </div>
  );
}

export default App;
