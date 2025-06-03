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
import SearchResults from "../pages/SearchResults/SearchResults";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import MyAccount from "../pages/MyAccount/MyAccount";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Orders from "../pages/Orders/Orders";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products/:productId" element={<ProductPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
