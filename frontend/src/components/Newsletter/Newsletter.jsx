import React from "react";
import "./newsletter.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const sendNewsletterFollower = (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });

  emailjs
    .sendForm("service_bgu7oxk", "template_fnzqw3n", "", "5NZVBYk7GV2tzzM0L")
    .then(
      (result) => {
        console.warn(result.text);
      },
      (error) => {
        console.error(error.text);
      }
    );
};

function Newsletter() {
  return (
    <form
      id="formNewsletter"
      className="newsletterForm"
      action="/api/route/contact"
      method="post"
      onSubmit={sendNewsletterFollower}
    >
      <p className="title">Suivez notre Newsletter !</p>
      <label htmlFor="inputNewsletterFirstname">
        Inscrivez votre nom...
        <input
          className=""
          id="inputNewsletterFirstname"
          type="text"
          name="firstname"
          placeholder="prénom"
        />
      </label>

      <label htmlFor="inputNewsletterEmail">
        Inscrivez votre email...
        <input
          className=""
          id="inputNewsletterEmail"
          type="email"
          name="adresseMail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="Votre email"
        />
      </label>

      <div className="nouSuivre">
        <button
          className="buttonStyle"
          type="submit"
          form="EnvoiContact"
          value="Submit"
        >
          ...Et suivez nous !
        </button>
      </div>
    </form>
  );
}

export default Newsletter;
