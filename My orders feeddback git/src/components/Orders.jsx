import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Badge, Modal, Button, Form } from 'react-bootstrap'; // Import Navbar, Modal, and Form components from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Orders.css'; // Import custom CSS for Orders component

const Orders = () => {
  // Define state variables
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Dummy orders data (replace with actual data fetching)
  const dummyOrders = [
    {
      id: 1,
      orderId: 'ORD123456',
      productName: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      dateDelivered: '2024-02-01',
    },
    {
      id: 2,
      orderId: 'ORD789012',
      productName: 'Product 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dateDelivered: '2024-02-03',
    },
    {
      id: 3,
      orderId: 'ORD345678',
      productName: 'Product 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      dateDelivered: '2024-02-05',
    },
    {
      id: 4,
      orderId: 'ORD901234',
      productName: 'Product 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      dateDelivered: '2024-02-07',
    },
    {
      id: 5,
      orderId: 'ORD567890',
      productName: 'Product 5',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dateDelivered: '2024-02-09',
    },
    {
      id: 6,
      orderId: 'ORD234567',
      productName: 'Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      dateDelivered: '2024-02-11',
    },
    {
      id: 7,
      orderId: 'ORD890123',
      productName: 'Product 7',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dateDelivered: '2024-02-13',
    },
    {
      id: 8,
      orderId: 'ORD456789',
      productName: 'Product 8',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      dateDelivered: '2024-02-15',
    },
    {
      id: 9,
      orderId: 'ORD012345',
      productName: 'Product 9',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      dateDelivered: '2024-02-17',
    },
    {
      id: 10,
      orderId: 'ORD678901',
      productName: 'Product 10',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dateDelivered: '2024-02-19',
    },
    // Dummy orders data (replace with actual data fetching)
    // (Previous dummyOrders data)
  ];

  useEffect(() => {
    // Simulate fetching orders data (replace with actual data fetching)
    setTimeout(() => {
      setOrders(dummyOrders);
    }, 1000);
  }, []); // Empty dependency array to run effect only once

  // Function to handle selecting an order
  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    setFeedback('');
  };

  // Function to handle feedback input change
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Function to handle submitting feedback
  const handleFeedbackSubmit = () => {
    // Logic to submit feedback goes here
    // For demonstration, we'll just log the feedback
    console.log('Feedback submitted:', feedback);
    setShowSuccessModal(true);
  };

  // Function to close success message modal
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setSelectedOrder(null);
    setFeedback('');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Organica</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/my-orders">My Orders</Nav.Link>
              <Nav.Link href="/catalogue">Catalogue</Nav.Link>
              <Nav.Link href="/cart">Cart <Badge variant="light">0</Badge></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container orders-container">
        <h2 className="orders-heading">My Orders</h2>
        <ul className="orders-list">
          {orders.map(order => (
            <li key={order.id} className="order-item">
              <div className="order-details">
                <p><strong>Order ID:</strong> {order.orderId}</p>
                <p><strong>Product Name:</strong> {order.productName}</p>
                <p><strong>Description:</strong> {order.description}</p>
                <p><strong>Date Delivered:</strong> {order.dateDelivered}</p>
              </div>
              <Button
                variant="primary"
                onClick={() => handleSelectOrder(order)} // Add click event handler to select order
                disabled={selectedOrder && selectedOrder.id === order.id}
              >
                Give Feedback
              </Button>
            </li>
          ))}
        </ul>
        {selectedOrder && (
          <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
            <Modal.Header closeButton>
              <Modal.Title>Feedback Submitted</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your feedback has been submitted successfully!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseSuccessModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Orders;
