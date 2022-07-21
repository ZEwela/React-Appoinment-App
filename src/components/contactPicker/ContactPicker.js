import React from "react";
import PropTypes from 'prop-types';

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select name="contactPicker" id="contactPicker" onChange={onChange}>
      <option defaultValue="--">--</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>{contact.name}</option>
      ))}
      
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.array,
  onChange: PropTypes.func
}

