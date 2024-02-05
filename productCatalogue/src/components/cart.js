import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Cart = ({ cart, show, onHide, onCheckout }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.name} - Quantity: {item.quantity} - ${item.price * item.quantity}</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onCheckout}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
