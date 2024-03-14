import React from 'react';
import './Welcomepage.css';

const ContactForm = () => {
  return (
    <div className="form">
      <h1 className="main-headings center">
        <span className="main-span">Contact Us</span>
      </h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="write your message..." />
        <button type="submit" className="form-btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
