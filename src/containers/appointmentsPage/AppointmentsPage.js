import {React, useState} from "react";
import PropTypes from 'prop-types';
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";



export const AppointmentsPage = ({appointments, addAppoinment}) => {
  
  const [currentTitle, setCurrentTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments}/>
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  appointments: PropTypes.array,
  contacts: PropTypes.array,
  addAppoinment: PropTypes.func
}