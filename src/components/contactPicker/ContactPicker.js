import React from "react";

/*#23 ContactPicker Requirements:Receive 4 props:, The array of contacts, A callback function to handle when the onChange event is triggered, value, name*/
export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <>
    {/*#24 Render a select element with the onChange attribute set to the callback passed in via props, a value attribute set to the value prop, and a name attribute set to the name prop.*/}
    <select 
    onChange={onChange}
    value={value}
    name={name}>
      <option value=''>No Contact Selected</option>
      {contacts.map((contact) => {
        return (
          <option
          value={contact}
          key={contact}>{contact}</option>
        )
      })}
    </select>
    </>
  );
};
