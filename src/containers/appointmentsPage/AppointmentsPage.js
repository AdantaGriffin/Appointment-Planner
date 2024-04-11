import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";


  /*#19 Receive three props: The current list of appointments, The current list of contacts, A callback function for adding a new appointment*/
export const AppointmentsPage = ({contacts, appointments, addAppointment}) => {
  /*#20 Keep track of four local state variables, the current name, contact, date, and time entered into the form*/
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*#21 Add a new appointment on form submission */
    addAppointment(name, contact, date, time);
    /*#22 Clear the form on submission*/
    setName('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        {/*#23 In the Add Appointment section, render an AppointmentForm with the following passed via props: local state variables, local state variable setter functions, handleSubmit callback function*/}
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          name={name}
          setTitle={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        {/*#24 In the Appointments section, render a TileList with the appointment array passed via props*/}
        <h2>Appointments</h2>
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};