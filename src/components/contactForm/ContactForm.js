import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const onNameChange = ({target}) => {
    setName(target.value)
  }
  const onPhoneChange = ({target}) => {
    setPhone(target.value)
  }
  const onEmailChange = ({target}) => {
    setEmail(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        // defaultValue={name}
        required 
        value={name}
        onChange={onNameChange}
      />
      <label htmlFor="phone">Phone Number</label>
      <small>  (Format: 123-456-7890)</small>
      <input 
        type="tel" 
        id="phone" 
        name="phone" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required 
        value={phone}
        // defaultValue={phone} 
        onChange={onPhoneChange}
      />
      
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email"
        name="email"
        // defaultValue={email}
        value={email}
        required 
        onChange={onEmailChange}
      />
      <input type="submit"/>
    </form>
  );
};

