import React from 'react'
import { Link } from "react-router-dom";
import "./categoryItem.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className='container__category'>
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="img" className='image_category' />
      </Link>
    </div>
  )
}

export default CategoryItem