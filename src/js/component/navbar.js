import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigateToAddContact = () => {
    navigate("/add-contact");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h1>Contacts</h1></a>
        <div className="ml-auto">
          <button
            className="btn btn-primary"
            onClick={handleNavigateToAddContact}
          >
            Add New Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



