import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

/*#6 Extract the array of contacts and the callback for adding contacts from the props value passed as an argument to ContactsPage*/
export const ContactsPage = ({contacts, addContact}) => {

  /*#7 Keep track of three local state values: the current name, phone, and email entered into the form*/
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*#8 Only add a new contact on form submission if it does not duplicate an existing contact’s name*/
    if(!duplicate){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*#9 To check for duplicates, implement a call to useEffect that sets the duplicate state variable to true if the name state variable is already in the contacts list*/
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);    
      if(found !== undefined){
        return true;
      }else {
        return false;
      };
    }
      if(nameIsDuplicate()){
        setDuplicate(true);
      } else{
        setDuplicate(false)
      }
    }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        {/*#10 In the Add Contact section, render a ContactForm with the following passed via props: local state variables, local state variable setter functions, handleSubmit callback function*/}
        <h2>Add Contact</h2> 
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        {/*#11 In the Contacts section, render a TileList with the contact array passed via props*/}
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
