import React, { StrictMode, useEffect, useState } from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";


const ProductInf = () => {
    const{id} = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/products/${id}`)
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
      <div>
        <div>{items.title}</div>
        <div>Цвет: {items.color}</div>
        <div>Description: {items.description}</div>
        <div>Price: {items.price}</div>
      </div>
    </div>
  )
}

export default ProductInf;