import {React, useState} from "react";
import PropTypes from 'prop-types';
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";



export const AppointmentsPage = ({appointments, contacts, addAppoinment}) => {
  
  const [currentTitle, setCurrentTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('wwww', currentTitle, contact, date, time)
    addAppoinment(currentTitle, contact, date, time);
    setCurrentTitle('');
    setContact('');
    setDate('');
    setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={currentTitle}
          contact={contact}
          date={date}
          time={time}
          setTime={setTime}
          setContact={setContact}
          setDate={setDate}
          setTitle={setCurrentTitle}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments}/>
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  appointments: PropTypes.array,
  contacts: PropTypes.array,
  addAppoinment: PropTypes.func
}