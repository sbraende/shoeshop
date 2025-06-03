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
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/MyAccount/DashboardLayout";
import DashboardLayout from "../pages/MyAccount/DashboardLayout";
import Overview from "../pages/MyAccount/Overview";
import Orders from "../pages/MyAccount/Orders";
import Confirmation from "../pages/Confirmation/Confirmation";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/checkout/confirmation/:orderNumber"
        element={<Confirmation />}
      />
      <Route path="/products/:productId" element={<ProductPage />} />
      <Route path="/myaccount" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
