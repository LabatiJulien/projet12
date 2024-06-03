import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Appel à l\'API...');
      console.log(formData); 
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Vous souhaitez en savoir plus ? N'hésitez pas à me contacter !</h2>
      {isSubmitted ? (
        <div className="success-message">
          Votre message a été envoyé avec succès !
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
