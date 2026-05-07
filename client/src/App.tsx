import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import SearchResults from "./pages/SearchResults";
import FlashDeals from "./pages/FlashDeals";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import OrderTracking from "./pages/OrderTracking";
import Addresses from "./pages/Addresses";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const toasterOptions = {
    duration: 3000,
    style: {
      background: "#1B3022",
      color: "#fff",
      borderRadius: "12px",
      fontSize: "14px",
    },
  };
  return (
    <Fragment>
      <Routes>
        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        {/* MAIN PAGES */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="deals" element={<FlashDeals />} />
          <Route  element={<ProtectedRoutes />}>
            <Route path="checkout" element={<Checkout />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="orders/:id" element={<OrderTracking />} />
            <Route path="addresses" element={<Addresses />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" toastOptions={toasterOptions} />
    </Fragment>
  );
}

export default App;
