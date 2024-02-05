import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Badge, Nav, Modal, Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Cat from './cat';
import Cart from './cart';
import Checkout from './checkout';

const products = [
  { id: 1, name: 'Organic Product', price: 25, image: 'images.jpeg' },
  { id: 2, name: 'Organic Product', price: 80, image: 'images.jpeg' },
  { id: 3, name: 'Organic Product', price: 50, image: 'images.jpeg' },
  { id: 4, name: 'Organic Product', price: 120, image: 'images.jpeg' },
  { id: 5, name: 'Organic Product', price: 65, image: 'images.jpeg' },
  { id: 6, name: 'Organic Product', price: 400, image: 'images.jpeg' },
  // Add more products as needed
];
const Catalogue = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setShowCart(true);
  };

  const handleAddToCartConfirm = () => {
    const existingItem = cart.find((item) => item.id === selectedProduct.id);

    if (existingItem) {
      // If the item already exists in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === selectedProduct.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with the specified quantity
      setCart([...cart, { ...selectedProduct, quantity }]);
    }

    setShowCart(false);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleBuyNow = (product) => {
    setShowCheckout(true);
    console.log('Buy Now:', product);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    console.log('Checkout:', cart);
    setCart([]);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Organica</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link  to="/cat">Catalogue</Link>
        <Link  to="/cart">Cart <Badge variant="light">{cart.length}</Badge></Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Routes>
  <Route path="/cat" element={<Cat products={products} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />} />
  <Route path="/cart" element={<Cart cart={cart} onClearCart={handleClearCart} onCheckout={handleCheckout} />} />
  <Route path="/checkout" element={<Checkout onBackToCart={handleBackToCart} />} />
  <Route path="/" element={<Catalogue products={products} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />} />
</Routes>

      {/* Use Catalogue Component */}
      {/* <Cat products={products} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} /> */}

      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter quantity:</p>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCartConfirm}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Use Cart Component */}
      {/* <Cart cart={cart} onClearCart={handleClearCart} onCheckout={handleCheckout} /> */}

      {/* Use Checkout Component */}
      {showCheckout && <Checkout onBackToCart={handleBackToCart} />}
    </div>
  );
};

export default Catalogue;
