import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea></textarea>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
