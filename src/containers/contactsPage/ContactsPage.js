import {React, useState, useEffect} from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";
import PropTypes from 'prop-types';
import  {ContactForm}  from "../../components/contactForm/ContactForm"; 
import {TileList} from "../../components/tileList/TileList";



export const ContactsPage = (props) => {
  const {contacts, addContact} = props;


  const [currentName, setCurrentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate === false) {
      addContact(currentName, phone, email);
    }
    setCurrentName('');
    setPhone('');
    setEmail('');
    setDuplicate(false);
  };

  useEffect(() => {
    let result = contacts.map(contact => contact.name);
    const check = result.filter( name => name === currentName);
  if (check.length > 0){
    setDuplicate(true);
  }
  }, [currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit} 
          name={currentName}
          phone={phone}
          email={email}
          setName={setCurrentName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts}/>
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func
}
