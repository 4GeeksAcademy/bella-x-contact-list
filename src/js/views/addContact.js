import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const AddContact = ({ closeModal }) => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email,
      address: address,
    };
    actions.addContact(newContact);
    closeModal(); 
    navigate("/");
  };

  return (
    <div>
      <form 
        onSubmit={handleSubmit} 
        className="p-4 bg-white rounded shadow"
        style={{ width: "100%" }}
      >
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
        <button type="submit" className="btn btn-success w-100">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddContact;

