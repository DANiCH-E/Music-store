import React, { StrictMode, useEffect, useState } from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { SetSubCatId } from "../../redux/reducer";


const Subcat = () => {
    
    const [items, setItems] = useState([]);
    const cats = useSelector(state => state.cart.itemsCat)
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(SetSubCatId(id))
      }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/subs/?category=${cats.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

  return (
    <div>
        <Header/>
        {/* <Categories/> */}
      {items.map(item => (
        <div key={item.id}>
          <Link onClick={() => handleClick(item.id)} to={`/products`}>{item.name}</Link>
          
        </div>
      ))}
    </div>
  )
}

export default Subcat;