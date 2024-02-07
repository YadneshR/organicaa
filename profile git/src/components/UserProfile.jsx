import "../components/profile.css";
// import { useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios or your preferred HTTP client library

// import AccountSettingsIcon from "../Components/Images/settings.png";
// import OrdersIcon from "../Components/Images/orders.png";
// import PasswordIcon from "../Components/Images/password.png";
import NavigationBar from "./Navigationnn";

const UserProfile = () => {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    FullName: "",
    emailID: "",
    contact: "",
    Country: "",
  });

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/user"); // Replace with your actual API endpoint
        const userData = response.data; // Assuming the response is in JSON format
        console.log(userData);
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
  };

  return (
    <>
      <NavigationBar />
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <h1>My Profile</h1>
          {/* Header content */}
        </div>

        <div className="main-content">
          {/* Side Buttons */}
          <div className="side-buttons">
            <button onClick={handleEdit}>
              <img
                // src={AccountSettingsIcon}
                alt="Account Settings"
                style={{ width: "20px", height: "20px" }}
              />{" "}
              Account Settings
            </button>
            <button>
              <img
                // src={OrdersIcon}
                alt="My Orders"
                style={{ width: "20px", height: "20px" }}
              />{" "}
              My Orders
            </button>
            <button>
              <img
                // src={PasswordIcon}
                alt="Change Password"
                style={{ width: "20px", height: "20px" }}
              />{" "}
              Change Password
            </button>
          </div>

          {/* Account Settings */}
          <div className="account-settings">
            {editing ? (
              <form>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={userInfo.FullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userInfo.emailID}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={userInfo.contact}
                    onChange={handleChange}
                    placeholder="Contact"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={userInfo.Country}
                    onChange={handleChange}
                    placeholder="Country"
                  />
                </div>
                {/* <button onClick={handleSave}>Save</button> */}
              </form>
            ) : (
              <div>
                <p>Full Name: {userInfo.FullName}</p>
                <p>Email: {userInfo.emailID}</p>
                <p>Contact: {userInfo.contact}</p>
                <p>Country: {userInfo.Country}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;