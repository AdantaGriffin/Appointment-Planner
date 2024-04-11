/*#1 Add { useState } to the 'react' import statement*/
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*#2 Create empty arrays for contacts and appointments using useState([])*/
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]);

  /*#3 Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts*/
  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email
      },
    ]);
  };
  /*#4 Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments*/
  const addAppointment = (name, contact, date, time) => {
    setAppointments([
      ...appointments, 
      {
        name: name,
        contact: contact, 
        date: date,
        time: time
      },
    ]);
  };
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      {/*#5 Pass the array of contacts and the appropriate callback function as props to the ContactsPage component*/}
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      {/*#6 Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component*/}
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
