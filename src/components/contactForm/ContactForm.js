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

  const onSubmit = (e) => {
    e.preventDefault();

    handleSubmit(e)
    
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        // defaultValue={name}
        required 
        value={name}
        onChange={event => setName(event.target.value)}
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
        onChange={event => setPhone(event.target.value)}
      />
      
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email"
        name="email"
        // defaultValue={email}
        value={email}
        required 
        onChange={event => setEmail(event.target.value)}
      />
      <input type="submit"/>
    </form>
  );
};

