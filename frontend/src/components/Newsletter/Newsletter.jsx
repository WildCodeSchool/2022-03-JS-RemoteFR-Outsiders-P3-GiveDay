/*eslint-disable */
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./newsletter.css";
import emailjs from "@emailjs/browser";
/* eslint-enable */
const sendNewsletterFollower = (e) => {
  e.preventDefault();

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
      <h3 className="title">Suivez notre Newsletter !</h3>
      <label htmlFor="inputNewsletterFirstname">
        {/* Inscrivez votre nom... */}
        <input
          className=""
          id="inputNewsletterFirstname"
          type="text"
          name="firstname"
          placeholder="NOM Prénom"
        />
      </label>

      <label htmlFor="inputNewsletterEmail">
        {/* Inscrivez votre email... */}
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
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_bbtx2wfm.json"
          className="player"
          loop
          autoplay
          style={{ width: "50%", marginBottom: "-3rem", marginTop: "-2rem" }}
        />
      </div>
    </form>
  );
}

export default Newsletter;
