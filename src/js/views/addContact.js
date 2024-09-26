import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const AddContact = () => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      phone: phone,
      email: email,
      address: address,
    };
    actions.addContact(newContact);
    navigate("/");
  };

  return (
    <div className="container" style={{ width: "70%", marginTop: "50px" }}>
      <h2 className="mb-4">Add New Contact</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100 mb-2">
          Save
        </button>
        <button 
          type="button" 
          className="btn btn-secondary w-50 mx-auto d-block" 
          style={{ fontSize: "0.8rem" }}
          onClick={() => navigate("/")}
        >
          Go back to contacts
        </button>
      </form>
    </div>
  );
};

export default AddContact;


