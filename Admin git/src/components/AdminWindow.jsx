import React, { useState } from 'react';
import { Button, Modal, ListGroup, Navbar, Nav } from 'react-bootstrap';
import './AdminWindow.css'; // Importing the CSS file

const AdminWindow = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      user: {
        id: 101,
        name: 'John Doe',
        email: 'john@example.com',
      },
      product: {
        id: 1,
        name: 'Product 1',
        quantity: 2,
      },
    },
    {
      id: 2,
      user: {
        id: 102,
        name: 'Jane Smith',
        email: 'jane@example.com',
      },
      product: {
        id: 2,
        name: 'Product 2',
        quantity: 1,
      },
    },
    {
      id: 3,
      user: {
        id: 103,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      product: {
        id: 3,
        name: 'Product 3',
        quantity: 3,
      },
    },
    {
      id: 4,
      user: {
        id: 104,
        name: 'Bob Brown',
        email: 'bob@example.com',
      },
      product: {
        id: 4,
        name: 'Product 4',
        quantity: 1,
      },
    },
    {
      id: 5,
      user: {
        id: 105,
        name: 'Emily Davis',
        email: 'emily@example.com',
      },
      product: {
        id: 5,
        name: 'Product 5',
        quantity: 2,
      },
    },
    // Add more orders as needed
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  const handleAcceptOrder = () => {
    setShowAcceptModal(true);
  };

  const handleRejectOrder = (order) => {
    setSelectedOrder(order);
    setShowRejectModal(true);
  };

  const handleProceedToDelivery = () => {
    // Proceed with the delivery process
    // You can add your logic here
    setShowAcceptModal(false);
  };

  const handleRejectReasonSubmit = () => {
    // Remove the rejected order from the list
    const updatedOrders = orders.filter(order => order.id !== selectedOrder.id);
    setOrders(updatedOrders);
    setShowRejectModal(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Organica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#customers">Customers</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-5">
        <h1 className="text-center mb-4">Admin Window</h1>
        {orders.length > 0 ? (
          <ListGroup>
            {orders.map(order => (
              <ListGroup.Item key={order.id} className="order-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>User: {order.user.name}</h5>
                  <p>Email: {order.user.email}</p>
                  <p>Ordered Product: {order.product.name}</p>
                  <p>Quantity: {order.product.quantity}</p>
                </div>
                <div>
                  <Button className="mr-2" variant="success" onClick={handleAcceptOrder}>Accept</Button>
                  <Button variant="danger" onClick={() => handleRejectOrder(order)}>Reject</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="text-center">No current orders</p>
        )}

        {/* Modal for accepting order */}
        <Modal show={showAcceptModal} onHide={() => setShowAcceptModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Proceed to Delivery?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAcceptModal(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleProceedToDelivery}>Proceed</Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for rejecting order with reason */}
        <Modal show={showRejectModal} onHide={() => setShowRejectModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Reason for Rejection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" className="form-control" placeholder="Enter reason for rejection" value={rejectionReason} onChange={e => setRejectionReason(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowRejectModal(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleRejectReasonSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AdminWindow;