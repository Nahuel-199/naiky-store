import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import Btn from "./components/btn/Btn";
import ProductList from "./pages/productsList/ProductList";
import AllProductList from "./pages/productsList/AllProductList";
import SingleProduct from "./pages/singleProduct/SingleProduct";


function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Btn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products" element={<AllProductList />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
