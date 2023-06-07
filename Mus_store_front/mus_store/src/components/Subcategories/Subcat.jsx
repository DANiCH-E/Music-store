import React, { StrictMode, useEffect, useState } from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SetSubCatId } from "../../redux/reducer";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import spic from '../../spic.jpg'

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


  const renderCard = (card, index) => {
    return(
      <Container>
      <Card style={{width: "18rem"}} key={index} className="box">
      <Card.Img variant="top" src={spic}/>
      <Card.Body>
        <Card.Title><Link onClick={() => handleClick(card.id)} to={`/products`}>{card.name}</Link></Card.Title>
      </Card.Body>
    </Card>
    </Container>
    );
    
  };

  return (
    <div className="grid">
      {items.map(renderCard)}
    </div>
  )
}

export default Subcat;