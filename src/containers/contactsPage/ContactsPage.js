import {React, useState, useEffect} from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";
import PropTypes from 'prop-types';
import  {ContactForm}  from "../../components/contactForm/ContactForm"; 
import {TileList} from "../../components/tileList/TileList";



export const ContactsPage = (props) => {
  const {contacts, addContact} = props;


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate === false) {
      addContact(name, phone, email);
    }
    setName('');
    setPhone('');
    setEmail('')
  };

  useEffect(() => {
  if  (contacts.filter( contact => contact.name === name)) {
    setDuplicate(true);
  }
  })

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          onSubmit={handleSubmit} 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func
}
