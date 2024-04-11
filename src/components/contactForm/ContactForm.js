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
  return (
    <>
    {/*#12 Render a form with: The onSubmit attribute set*/}
      <form onSubmit={handleSubmit}>

        {/*#13 3 controlled <input> elements, one for each piece of contact data*/}
        <lable>Name</lable>
        <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='contact name'></input>
        
        <lable>Phone</lable>
        <input
        type='tel'
        value={phone}
        pattern='{[0-9]10}'
        placeholder='##########'
        onChange={(e) => setPhone(e.target.value)}
        ></input>
        
        <lable>Email</lable>
        <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'></input>

        <input
        type='submit'
        value='add contact'></input>
      </form>
    </>
  );
};

