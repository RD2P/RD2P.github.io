import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../styles/contact.css'

const Contact = () => {

  const serviceID = import.meta.env.VITE_SERVICE_ID
  const templateID = import.meta.env.VITE_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert('Messaged sent')
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
