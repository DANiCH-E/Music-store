import React, { StrictMode, useEffect, useState } from "react";
import Header from "../Header/Header";
import { Navigate, useNavigate } from "react-router-dom";
import Subcat from "../Subcategories/Subcat";
import { useDispatch } from "react-redux";
import { SetCatId } from "../../redux/reducer";


const Categories = () => {
    
    const [items, setItems] = useState([]);
    const [catId, setCatId] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleClick = (id) => {
    setCatId(id)
    dispatch(SetCatId(id))
    navigate('/subcat')
  }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/categories`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <button onClick={() => handleClick(item.id)}>{item.name}</button>
        </div>
      ))}

    </div>

  )
}

export default Categories;