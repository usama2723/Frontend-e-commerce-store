import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Layout from "./Layout";
import AddToCart from "./pages/AddToCart";
import SingalItems from "./pages/SingalItems";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/singalitems" element={<SingalItems />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Layout>
      </BrowserRouter>
    </div>
  );
};
export default App;
