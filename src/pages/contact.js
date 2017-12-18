import React, { Component } from 'react'
import './contact.css'

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {

    return (
      <div className="content--center">
        <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
          <label>
            <span>Name </span>
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <label>
            <span>Email </span>
            <input type="email" name="email" onChange={this.handleChange}/>
          </label>
          <label>
            <span>Words </span>
            <textarea name="message" onChange={this.handleChange}></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default Contact
