import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e)
  }

  return (
    <form onSubmit={onSubmit}>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          required
          onChange={event => setTitle(event.target.value)}
        />
        <label for="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          min={getTodayString}
          required
          onChange={event => setDate(event.target.value)}
        />
        <label for="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          required
          onChange={event => setTime(event.target.value)}
        />
        <ContactPicker 
          contacts={contacts}
          onChange={event => setContact(event.target.value)}
        />
        <input type="submit"/>
    </form>
  );
};

