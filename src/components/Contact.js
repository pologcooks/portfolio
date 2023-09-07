import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [validationMessage, setValidationMessage] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value) {
      setValidationMessage({
        ...validationMessage,
        [name]: 'This field is required'
      });
    } else {
      setValidationMessage({
        ...validationMessage,
        [name]: ''
      });
    }

    if (name === 'email' && value) {
        if (!value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
          setValidationMessage({
            ...validationMessage,
            email: 'Please enter a valid email address'
          });
        } else {
          setValidationMessage({
            ...validationMessage,
            email: ''
          });
        }
      }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setValidationMessage({
        ...validationMessage,
        email: 'Please enter a valid email address'
      });
      return;
    }  };

  return (
    <div className="container my-5">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          <small className="text-danger">{validationMessage.name}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          <small className="text-danger">{validationMessage.email}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          ></textarea>
          <small className="text-danger">{validationMessage.message}</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
