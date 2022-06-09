import React from "react";
import "./contact.css";

function Contact() {
  function onSubmit() {
    console.warn("Envoi du formulaire de contact...");
  }

  function handleAdd() {
    console.warn("Clic boutton Envoi du formulaire de contact...");
  }

  return (
    <div className="contactContainer">
      <form
        id="contact"
        className="contactForm"
        action="/api/route/contact"
        method="post"
        onSubmit={onSubmit}
      >
        <h1>Giveday !</h1>
        <label htmlFor="input_mail">
          Email
          <input
            className="inputForm"
            id="input_mail"
            type="email"
            name="adresse_mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </label>

        <label htmlFor="input_message">
          Votre message
          <textarea id="input_message" defaultValue="" />
        </label>

        <button
          className="buttonStyle"
          type="submit"
          form="EnvoiContact"
          value="Submit"
          onClick={handleAdd}
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}

export default Contact;
