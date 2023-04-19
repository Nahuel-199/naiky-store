import React from 'react'
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./product.scss";


const Product = ({ item }) => {
  return (
    <div className='container-product'>
        <div className="circle"></div>
        <img src={item.img} alt="img" className='img-product' />
        <div className="info">
           
            <div className="icon">
            <Link to={`/product/${item._id}`}>
              <BiSearch  style={{color: "black"}}/>
                </Link>
            </div>
          
        </div>
    </div>
  )
}

export default Product