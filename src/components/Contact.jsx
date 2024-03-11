import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../styles/contact.css'

const Contact = () => {

  const serviceID = 'service_oo65yid'
  const templateID = 'template_hfqpgem'
  const publicKey = 'TTuhCn1P_q4ryAQmH'

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert('Message sent successfully')
          e.target.reset()
        },
        (error) => {
          alert('Something went wrong...', error.text)
        },
      );
  };

  return (
    <div className="contact-me-container">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="user_email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Send" className='submit-btn' />
      </form>
    </div>
  )
}

export default Contact
