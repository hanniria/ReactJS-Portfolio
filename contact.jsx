import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <ul>
          <li><i className="fab fa-github"></i> <a href="https://github.com/hanniria" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><i className="fab fa-facebook"></i> <a href="https://www.facebook.com/yzapajarillon" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><i className="fab fa-instagram"></i> <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><i className="fas fa-envelope"></i> <a href="mailto:pajarillonlouizza@gmail.com">Email</a></li>
          <li><i className="fas fa-phone-alt"></i> 091020304050</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
