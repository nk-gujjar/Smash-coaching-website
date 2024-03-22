import React, { useState } from 'react';
import './Welcomepage.css';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === true) {
        console.log('Message sent successfully:', result.message);
        // You can perform further actions here like showing a success message, resetting the form, etc.
      } else {
        console.error('Error sending message:', result.message);
      }
    } catch (error) {
      console.error('Error occurred while sending message:', error);
    }
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
        <button type="submit" className="form-btn" >Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
