import React, { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

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

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
    {/*#19 
The onSubmit attribute set to the callback function passed in via props*/}
    <form onSubmit={handleSubmit}>
      {/*#20 3 controlled input components, to be used for the name, date and time appointment data*/}

      <label>Type</label>  
      <input
      type='text'
      value={title}
      placeholder='appointment type'
      onChange={(e) => setTitle(e.target.value)}></input>
      {/*#21 A ContactPicker component with the contacts list passed in via props*/}
      <ContactPicker
      contacts={contactNames}
      contact={contact}
      onChange={(e) => setContact(e.target.value)}/>
      
      <label>Date</label>  
      <input
      type='date'
      value={date}
      onChange={(e) => setDate(e.target.value)}></input>
      
      <label>Time</label>  
      <input
      type='time'
      value={time}
      min={getTodayString()}
      onChange={(e) => setTime(e.target.value)}></input>
      {/*#22 A submit button*/}
      <input
      type='submit'
      value='add appointment'></input>
    </form></>
  );
};
