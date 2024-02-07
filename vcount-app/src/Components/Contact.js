import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Vous avez des question ?</h1>
      <h1 className="primary-heading">Contactez-nous</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </section>
  );
};

export default Contact;