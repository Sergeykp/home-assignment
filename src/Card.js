import React from 'react';
import {Col, Carousel, Button} from 'react-bootstrap';
import {FaGripfire} from 'react-icons/fa';

const SoldBtn = props => (
    <Button className="card-btn" variant="outline-secondary" disabled>
        Sold Out
    </Button>
);

const ShopBtn = ({link}) => (
    <Button href={link} variant="warning" className="shop-btn card-btn">
        Shop Now
    </Button>
);

const Card = ({
  img_front,
  img_angle,
  img_side,
  name,
  price,
  final_price,
  qty,
  link
}) => {
    const discount = Math.round(100 - ((final_price / price) * 100));
    return (
<Col md={4} sm={12} >
    <div className="card">
        <div className="top-line">
            <label className="discount">{discount}% OFF</label>
            <label className="count">
                {qty} Items left
                <FaGripfire size={24} spacing={5}/>
            </label>
        </div>
        <Carousel interval={null}>
            <Carousel.Item>
                <img src={img_front} className="d-block w-100" alt="front" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={img_angle} className="d-block w-100" alt="angle"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img_side} className="d-block w-100" alt="side"/>
            </Carousel.Item>
        </Carousel>
        <h1 className="name">{name}</h1>
        <p className="text-center">
            <strike>${price}</strike>
            <strong className="final-price">${final_price}</strong>
            <span> + Free Shipping</span>
        </p>

        {
            !!qty ? <ShopBtn /> : <SoldBtn/>
        }
    </div>

</Col>
    );
};

export default Card;