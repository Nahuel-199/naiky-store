import { useEffect, useState } from "react";
import Product from "../product/Product";
import axios from "axios";
import "./products.scss";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="container__products">
     
      {filteredProducts
        ? filteredProducts.map((item, index) => <Product item={item} key={index} />)
        : products
            .map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};

export default Products;
