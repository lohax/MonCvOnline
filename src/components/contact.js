import React, { Component } from "react";
import { Alert } from 'react-bootstrap';
import Jump from 'react-reveal/Jump';

export default class Contact extends Component {

  submitForm = this.submitForm.bind(this);
  state = {
    status: ""
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


  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <Jump>
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

              {this.state.status === "SUCCESS" ? <Alert variant="success"><p>Merci!</p><p>Votre message a bien été envoyé</p></Alert> : <button type="submit">Envoyer</button>}
              {this.state.status === "ERROR" && <Alert variant="danger">Ooops! Une erreur est survenue.</Alert>}

            </div>
          </form>
          </Jump>
        </div>
      </div>
    );
  }


}

