import React, { Component } from 'react'
import './contact.css'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleResponse = (response) => {

    const form = document.forms[0];
    const inputs = Array.from(form.querySelectorAll('input')).concat(Array.from(form.querySelectorAll('textarea')));
    const submit = form.querySelector('button');

    inputs.forEach(input => input.value = '');

    submit.innerHTML = response;

    setTimeout(() => submit.innerHTML = 'Send', 2000);
  }

  handleSubmit = e => {

    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.handleResponse('Success'))
      .catch(error => this.handleResponse('Error'));
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
            onSubmit={(e) => this.handleSubmit(e)}
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
