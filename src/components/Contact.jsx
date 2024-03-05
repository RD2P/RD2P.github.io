import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className="contact-me-container">
      <h2>Contact Me</h2>
      <form action="#" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
