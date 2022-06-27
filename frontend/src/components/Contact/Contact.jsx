import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });

    emailjs
      .sendForm(
        "service_bgu7oxk",
        "template_fnzqw3n",
        form.current,
        "5NZVBYk7GV2tzzM0L"
      )
      .then(
        (result) => {
          console.warn(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contactContainer">
      <form
        action="/api/route/contact"
        method="post"
        onSubmit={sendEmail}
        ref={form}
      >
        <h1>Prenez contact avec nous !</h1>
        <input type="text" name="name" placeholder="Nom et prénom" required />

        <input type="email" name="email" placeholder="adresse mail" required />

        <textarea
          type="message"
          row="12"
          name="message"
          placeholder="Votre message"
          required
        />

        <button className="buttonStyle" type="submit">
          Envoyer le message
        </button>
      </form>
    </div>
  );
}

export default Contact;
