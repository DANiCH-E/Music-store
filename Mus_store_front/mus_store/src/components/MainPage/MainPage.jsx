import React from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import { Carousel } from "react-bootstrap";
import fpic from '../../fpic.jpg'
import spic from '../../spic.jpg'
import tpic from '../../tpic.jpg'

function MainPage() {
  return (
    <Carousel>
      <Carousel.Item style={{'height': '800px'}}>
        <img
          className="d-block w-100"
          src={fpic}
          alt="Your ad is here"
        />
        <Carousel.Caption>
          <h3>The most popular music instruments</h3>
          <p>Choose what you want.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height': '800px'}}>
        <img
          className="d-block w-100"
          src={spic}
          alt="Your ad is here"
        />
        <Carousel.Caption>
          <h3>Guitars for every taste</h3>
          <p>Fender, Gibson, Jackson and many others.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height': '800px'}}>
        <img
          className="d-block w-100"
          src={tpic}
          alt="Your ad is here"
        />
        <Carousel.Caption>
          <h3>Discounts on keyboard instruments</h3>
          <p>Save up to 50%!</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default MainPage;
