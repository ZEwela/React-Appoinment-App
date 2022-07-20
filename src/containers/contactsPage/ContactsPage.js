import {React, useState, useEffect} from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";
import propTypes from 'prop-types';
import { ContactForm } from "../../components/contactForm/ContactForm"; 
import {TitleList} from "../../components/tileList/TileList";



export const ContactsPage = (props) => {
  const {contacts, addContact} = props;


  const [currentName, setCurrentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate === false) {
      addContact(currentName, phoneNumber, email);
    }
    setCurrentName('');
    setPhoneNumber('');
    setEmail('')
  };

  useEffect(() => {
  if  (contacts.filter( contact => contact.name === currentName)) {
    setDuplicate(true);
  }
  })

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: Prototype.array,
  addContact: Prototype.func
}
