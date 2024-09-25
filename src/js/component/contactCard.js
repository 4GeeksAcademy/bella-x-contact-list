import React, { useState, useContext } from 'react'; 
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import { EditContact } from '../views/editContact';

export const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleEdit = (id) => {
        actions.selectedId(id);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleDeleteConfirm = async () => {
        await actions.deleteContact(contact.id);
        setShowDeleteModal(false);
    };

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img 
                        src="https://resizing.flixster.com/CwI1MWWaJBWk1An_WQfuQQSL-WY=/fit-in/500x800/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p175884_k_h10_ae.jpg"
                        alt="Contact Avatar" 
                        className="rounded-circle" 
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text"><i className="fas fa-envelope"></i> {contact.email}</p>
                        <p className="card-text"><i className="fas fa-phone"></i> {contact.phone}</p>
                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary" onClick={() => handleEdit(contact.id)}>
                                <i className="fas fa-edit"></i> Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => setShowDeleteModal(true)}>
                                <i className="fas fa-trash-alt"></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showEditModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Contact</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseEditModal}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <EditContact closeModal={handleCloseEditModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showDeleteModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={() => setShowDeleteModal(false)}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this contact?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleDeleteConfirm}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactCard;

