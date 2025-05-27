import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ProductPage from "../pages/ProductPage/ProductPage";
import Signup from "../pages/Signup/Signup";
import SearchResults from "../pages/SearchResults/SearchResults";
import Signin from "../pages/Signin/Signin";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
