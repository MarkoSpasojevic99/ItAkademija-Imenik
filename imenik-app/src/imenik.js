import React, { useState, useEffect } from 'react';

const Imenik = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  const addContact = () => {
    if (name && phone) {
      const newContact = { name, phone };
      const updatedContacts = [...contacts, newContact];
      setContacts(updatedContacts);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      setName('');
      setPhone('');
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div>
      <h1>Imenik</h1>
      <input
        type="text"
        placeholder="Unesite ime"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Unesite broj telefona"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={addContact}>Dodaj kontakt</button>

      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name}: {contact.phone} 
            <button onClick={() => deleteContact(index)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Imenik;
