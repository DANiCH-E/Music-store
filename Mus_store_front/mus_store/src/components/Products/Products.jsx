import React, { StrictMode, useEffect, useState } from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";


const Products = () => {
    
    const [items, setItems] = useState([]);
    const subcats = useSelector(state => state.cart.itemsSubCat)
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/product/?subcat=${subcats.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

  return (
    <div>
        {/* <Header/> */}
        {/* <Categories/> */}
      {items.map(item => (
        <div key={item.id}>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default Products;