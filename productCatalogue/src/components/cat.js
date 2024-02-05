// Catalogue.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Cat = ({ products, onAddToCart, onBuyNow }) => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Featured Products</h2>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={`./images/${product.image}`} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => onAddToCart(product)}
                  className="mr-2 animate__animated animate__pulse"
                >
                  Add to Cart
                </Button>
                <Button
                  variant="success"
                  onClick={() => onBuyNow(product)}
                  className="animate__animated animate__pulse"
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cat;
