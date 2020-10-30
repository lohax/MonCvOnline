import React, { Component } from "react";

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <form
            action="https://formspree.io/f/xeqpkapr"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot"
            onSubmit={this.submitForm}

          >
            <div>
              <input type="text" name="name" required placeholder="Nom" />
            </div>
            <div>
              <input type="email" name="email" required placeholder="Email" />
            </div>
            <div>
              <textarea name="message" required placeholder="Message" ></textarea>
            </div>
            <div>
              {this.status === "SUCCESS" ? <p>Merci!</p> : <button type="submit">Envoyer</button>}
              {this.status === "ERROR" && <p>Ooops! Une erreur est survenue.</p>}

            </div>
          </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

}

