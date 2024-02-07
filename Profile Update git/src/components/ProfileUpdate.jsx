import React, { useState } from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'; // Import Navbar component from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './UpdateProfile.css'; // Import custom CSS for UpdateProfile component

const ProfileUp = () => {
  // Define state variables for user information
  const [name, setName] = useState('John Doe');
  const [mobile, setMobile] = useState('1234567890');
  const [email, setEmail] = useState('johndoe@example.com');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [profilePicture, setProfilePicture] = useState('profile.jpg'); // Default profile picture
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update user profile goes here
    // You can send this data to your backend API for processing
    console.log('Profile updated:', { name, mobile, email, address, profilePicture });
    // After saving, switch back to view mode
    setIsEditing(false);
  };

  // Function to handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
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
      <div className="container update-profile-container">
        <h2 className="update-profile-heading">Update Profile</h2>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="update-profile-label">Profile Picture:</label>
              <div className="profile-picture-container">
                <img className="profile-picture" src={profilePicture} alt="Profile" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="update-profile-label">Name:</label>
              <input
                type="text"
                className="form-control update-profile-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="update-profile-label">Mobile:</label>
              <input
                type="text"
                className="form-control update-profile-input"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="update-profile-label">Email:</label>
              <input
                type="email"
                className="form-control update-profile-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="update-profile-label">Address:</label>
              <textarea
                className="form-control update-profile-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="update-profile-button-container">
              <button type="submit" className="btn btn-primary update-profile-button">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary update-profile-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="profile-picture-container">
              <img className="profile-picture" src={profilePicture} alt="Profile" />
            </div>
            <p className="update-profile-text"><strong>Name:</strong> {name}</p>
            <p className="update-profile-text"><strong>Mobile:</strong> {mobile}</p>
            <p className="update-profile-text"><strong>Email:</strong> {email}</p>
            <p className="update-profile-text"><strong>Address:</strong> {address}</p>
            <button
              type="button"
              className="btn btn-primary update-profile-button"
              onClick={() => setIsEditing(true)}
            >
              Update Information
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileUp;
