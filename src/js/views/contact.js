import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContacts();
    }, []);

    return (
        <div className="container">
            {store.contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
            ))}
        </div>
    );
};