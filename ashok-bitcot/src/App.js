import React, { useState, useEffect } from 'react';

const App = () => {
  
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
      .then((response) => response.json())
      .then((data) => setContacts(data)) 
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  
  const handleDelete = (id) => {
    
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  
  const handleView = (contact) => {
    setSelectedContact(contact); 
  };

  return (
    <div className="App">
      
      <button className='btn btn-success'> Add contact List <i className='fa fa-add'/></button>
      
      
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <span>{contact.name}</span>
            
            
            <button onClick={() => handleView(contact)} className="view-btn">
              👁️ View
            </button>
            
            
            <button onClick={() => handleDelete(contact.id)} className="delete-btn">
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Conditionally render the contact details if selected */}
      {selectedContact && (
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> {selectedContact.name}</p>
          <p><strong>Email:</strong> {selectedContact.email}</p>
          <p><strong>Mobile:</strong> {selectedContact.mobile}</p>
          
        </div>
      )}
    </div>
  );
};

export default App;
