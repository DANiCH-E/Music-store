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

  return (
    <div className="grid">
      {/* <Header/> */}
      {/* <Categories/> */}
      {items.map(item => (
        <div key={item.id} className="grid">
          

        

      {/* <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
          <Col> */}
            <Card style={{width: '18rem'}}>
              <Card.Img variant="top" src={spic} key={item.id} className="box" />
              <Card.Body>
                <Card.Title><Link onClick={() => handleClick(item.id)} to={`/products`}>{item.name}</Link></Card.Title>
                
              </Card.Body>
            </Card>
          {/* </Col>
        </Row>
      </Container> */}
      </div>
      ))}
    </div>
  )
}

export default Subcat;