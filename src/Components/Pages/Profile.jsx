import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid">
      <h3 className="text-center">Profile Details</h3>
      <div className="container mt-3 p-1">
        <div className="row">
          <div></div>
          <div className="col-6">
            <img
              src={user.profileImage}
              alt="Profile"
              className="img-fluid rounded-circle mb-5"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="col-6">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Number:</strong> {user.number}
            </p>
            <p>
              <strong>Date of Birth:</strong> {user.dob}
            </p>
            <Link
              to="/edit-profile"
              className="btn btn-primary"
              style={{ marginRight: "5px" }}
            >
              Edit Profile
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-danger"
              style={{ marginLeft: "5px" }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
