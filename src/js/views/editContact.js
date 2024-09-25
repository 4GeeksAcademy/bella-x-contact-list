import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types"; 
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const EditContact = ({ closeModal }) => {
    const navigate = useNavigate();
    const { actions, store } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [contactEdit, setContactEdit] = useState(null);

    useEffect(() => {
        const contactToEdit = store.contacts.find(contact => contact.id === store.selected_id);
        setContactEdit(contactToEdit);
    }, [store.contacts, store.selected_id]); 

    useEffect(() => {
        if (contactEdit) {
            setName(contactEdit.name || "");
            setEmail(contactEdit.email || "");
            setPhone(contactEdit.phone || "");
            setAddress(contactEdit.address || "");
        }
    }, [contactEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.updateContact(store.selected_id, name, phone, email, address);
        closeModal();
        navigate("/");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow" style={{ width: "100%" }}>
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

EditContact.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default EditContact;
