import React, { useState } from "react";
import AgriMartFarmerNavBar from "../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar";
import "./AgriMartAccountSettings.css";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
function AgriMartAccountSettings() {
  const [formData, setformData] = useState({
    firstName: "Farmer",
    lastName: "Portal",
    userName: "farmer_001",
    mobile: "761235645",
    email: "farmer@gmail.com",
    password: "farmer123",
  });

  const { firstName, lastName, userName, mobile, email, password } = formData;

  const [disable, setDisable] = useState(false);

  const onChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSaveProfile = (e) => {
    e.preventDefault();
    setDisable(false);
  };

  return (
    <div>
      <div>
        <AgriMartFarmerNavBar />
      </div>

      <div>
        <h2 class="txt-header">Account Settings</h2>
      </div>
      <div className="row" style={{ marginLeft: "40px" }}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Edit
        </div>
        <input
          style={{
            height: "20px",
            width: "20px",
            marginLeft: "15px",
          }}
          type="checkbox"
          checked={disable}
          onChange={(e) => {
            setDisable(e.target.checked);
          }}
        />
      </div>
      <form onSubmit={(e) => onSaveProfile(e)}>
        <div className="row" style={{ marginLeft: "40px" }}>
          <div className="col-lg-6">
            <div className="mt-3 mb-2 card-title">First Name</div>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={firstName}
              onChange={(e) => onChange(e)}
              disabled={!disable}
              required
            />
          </div>
          <div className="col-lg-6">
            <div className="mt-3 mb-2 card-title">Last Name</div>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
              disabled={!disable}
              required
            />
          </div>
          <div className="col-lg-6">
            <div className="mt-3 mb-2 card-title">User Name</div>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={userName}
              onChange={(e) => onChange(e)}
              disabled={!disable}
              required
            />
          </div>
          <div className="col-lg-6">
            <div className="mt-3 mb-2 card-title">Mobile</div>
            <input
              type="number"
              className="form-control"
              name="mobile"
              value={mobile}
              disabled={!disable}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="col-lg-6">
            <div className="mt-3 mb-2 card-title">Email</div>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              disabled={!disable}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="col-lg-6">
            <div className="mt-3 mb-2 card-title">Password</div>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              disabled={!disable}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div class="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 py-4">
            <button
              style={{ float: "right" }}
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </form>

      <div>
        <AgriMartFooter />
      </div>
    </div>
  );
}

export default AgriMartAccountSettings;