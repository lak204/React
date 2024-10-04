import React from 'react';
import { Carousel } from 'react-bootstrap';

const PizzaCarousel = () => {
  return (
    <Carousel interval={2000} controls indicators>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/pizza1.jpg"
          alt="Neapolitan Pizza"
        />
        <Carousel.Caption>
          <h5>Neapolitan Pizza</h5>
          <p>Originating from Naples, Italy, this pizza has a thin, soft crust topped with fresh tomatoes, mozzarella, and basil for a classic flavor.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/pizza2.jpg"
          alt="Vegetable Pizza"
        />
        <Carousel.Caption>
          <h5>Vegetable Pizza</h5>
          <p>This pizza is loaded with fresh veggies like bell peppers, onions, mushrooms, and olives on a tomato sauce base.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/pizza3.jpg"
          alt="Pizza with Cheese"
        />
        <Carousel.Caption>
          <h5>Pizza with Cheese</h5>
          <p>A classic pizza topped with rich, melted cheese for those who love the simplicity of cheesy goodness.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/pizza4.jpg"
          alt="Pepperoni Pizza"
        />
        <Carousel.Caption>
          <h5>Pepperoni Pizza</h5>
          <p>One of the most popular pizzas, featuring slices of spicy pepperoni over a base of tomato sauce and melted cheese.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/pizza5.jpg"
          alt="Margherita Pizza"
        />
        <Carousel.Caption>
          <h5>Margherita Pizza</h5>
          <p>A simple and fresh pizza with mozzarella, tomatoes, and basil, representing the colors of the Italian flag.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PizzaCarousel;
