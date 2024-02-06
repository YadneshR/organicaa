import React, { useState } from 'react';
import { Button, Modal, Navbar, Nav } from 'react-bootstrap';
// import style from './components';
 
const Inventory = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1. Price: $10, Quantity: 100',
      image: 'images.png',
      quantity: 100
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2. Price: $20, Quantity: 50',
      image: 'images.png',
      quantity: 50
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3. Price: $15, Quantity: 75',
      image: 'images.png',
      quantity: 75
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4. Price: $25, Quantity: 60',
      image: 'images.png',
      quantity: 60
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5. Price: $18, Quantity: 80',
      image: 'images.png',
      quantity: 80
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 6. Price: $30, Quantity: 90',
      image: 'images.png',
      quantity: 90
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1. Price: $10, Quantity: 100',
      image: 'images.png',
      quantity: 100
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2. Price: $20, Quantity: 50',
      image: 'images.png',
      quantity: 50
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3. Price: $15, Quantity: 75',
      image: 'images.png',
      quantity: 75
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4. Price: $25, Quantity: 60',
      image: 'images.png',
      quantity: 60
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5. Price: $18, Quantity: 80',
      image: 'images.png',
      quantity: 80
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 6. Price: $30, Quantity: 90',
      image: 'images.png',
      quantity: 90
    },
    // Add more products as needed
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newStock, setNewStock] = useState(0);

  const handleAddStock = () => {
    // Update stock for the selected product
    const updatedProducts = products.map(product =>
      product.id === selectedProduct.id
        ? { ...product, quantity: product.quantity + newStock }
        : product
    );
    setProducts(updatedProducts);
    handleCloseModal();
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
    setNewStock(0);
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
        <h1 className="text-center mb-4">Inventory List</h1>
        <ul className="list-group">
          {products.map(product => (
            <li key={product.id} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <img src={product.image} className="mr-3" alt={product.name} style={{ maxWidth: '100px' }} />
                </div>
                <div>
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <div>
                    <span className="mr-2">Price: {product.price}</span>
                    <span>Quantity: {product.quantity}</span>
                  </div>
                </div>
                <div>
                  <Button variant="primary" onClick={() => handleOpenModal(product)}>Add Stock</Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for adding stock */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Stock for {selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="number" value={newStock} onChange={e => setNewStock(parseInt(e.target.value))} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddStock}>
            Add Stock
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Inventory;
