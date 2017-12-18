import React from 'react'
import './contact.css'

const Contact = () => {

  return (
    <div className="content--center">
      <form name="contact" data-netlify="true">
        <label><span>Name </span><input type="text" name="name" /></label>
        <label><span>Email </span><input type="email" name="email" /></label>
        <label><span>Words </span><textarea name="message"></textarea></label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
