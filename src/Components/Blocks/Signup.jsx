import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Footer from "../Layouts/Footer";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    dob: "",
    profileImage: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signup(formData);
    if (success) {
      navigate("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="container-fluid">
      <div className="container mt-3 p-1">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Number
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label">
              Profile Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="profileImage"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <Link to="/login" className="btn btn-link">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
