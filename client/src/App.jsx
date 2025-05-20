import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import SiteHeader from "./components/SiteHeader/SiteHeader";

function App() {
  return (
    <>
      <SiteHeader />
      <Outlet></Outlet>
    </>
  );
}

export default App;
