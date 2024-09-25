import React, { useState } from "react";
import { AddContact } from "../views/addContact"; 

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h1>Contacts</h1></a>
        <div className="ml-auto">
          <button
            className="btn btn-primary"
            onClick={handleShowModal}
          >
            Add New Contact
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Contact</h5>
                	<button
					type="button"
					className="close"
					aria-label="Close"
					onClick={handleCloseModal}
					>
                  	<span aria-hidden="true">&times;</span>
                	</button>
                 </div>
            <div className="modal-body">
            	<AddContact closeModal={handleCloseModal} />
            </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


