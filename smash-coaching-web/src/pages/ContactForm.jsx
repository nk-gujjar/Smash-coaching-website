import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database"; // Correct import for Realtime Database usage
import './Welcomepage.css';
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from '../Admin/Firebasekeys';



// Initialize Firebase app and Realtime Database instance
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Get a reference to the database

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending data to Firebase Realtime Database
    push(ref(database, 'contacts'), formData)
      .then(() => {
        console.log('Data sent successfully!');
        // You can perform further actions here like showing a success message, resetting the form, etc.
      })
      .catch((error) => {
        console.error('Error sending data: ', error);
      });
  };

  return (
    <div className="form">
      <h1 className="main-headings center">
        <span className="main-span">Contact Us</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} />
        <button type="submit" className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
