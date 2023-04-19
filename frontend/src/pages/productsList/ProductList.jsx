import { useLocation } from "react-router";
import { useState } from "react";
import Products from "../../components/products/Products";
import "./productList.scss";

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,] = useState({});
    const [sort,] = useState("newest");
  
  return (
    <div className="container__productList">
      <h1 className="title__productList">{cat.replace('%20', ' ').toUpperCase()}</h1>
      <div className="filterContainer">
        </div>
      <Products cat={cat} filters={filters} sort={sort} />
    </div>
  );
};

export default ProductList;
