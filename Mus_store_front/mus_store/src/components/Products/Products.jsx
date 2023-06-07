import React, { StrictMode, useEffect, useState } from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import spic from '../../spic.jpg'
import { SetItemInCart } from "../../redux/reducer";

const Products = () => {
    
    const [items, setItems] = useState([]);
    const subcats = useSelector(state => state.cart.itemsSubCat)
    const itemsincart = useSelector(state => state.cart.itemsInCart)
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/product/?subcat=${subcats.id}`)
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
          <Card.Title><Link to={`/products/${card.id}`}>{card.title}</Link></Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Button onClick={ () => {dispatch(SetItemInCart(card))}}>В корзину</Button>
        </Card.Body>
      </Card>
      </Container>
      );
      
    };
  return (
    <div>
        {items.map(renderCard)}
    </div>
  )
}

export default Products;