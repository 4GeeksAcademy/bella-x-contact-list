import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import ContactCard from '../component/contactCard';

export const Home = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.createAgenda();
        actions.getContacts();  
       
    }, []);

      return (
        <div className="container">
            <div className="d-flex justify-content-between my-4"></div>
            <div className="row">
                
                 {store.contacts.map((contact) => (
                    
                        <ContactCard
                            contact={contact}
                            
                        />
                    
                ))}
            </div>
        </div>
    );
};

export default Home;
