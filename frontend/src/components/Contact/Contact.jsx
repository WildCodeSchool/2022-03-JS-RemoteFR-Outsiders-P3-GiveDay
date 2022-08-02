import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Layout from "@components/Layout";
import Swal from "sweetalert2";

// Le formulaire de contact est crée avec EmailJs (voir readMe dans dossier Contact): https://www.emailjs.com/docs/examples/reactjs/

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Message envoyé!",
      showConfirmButton: false,
      timer: 1700,
    });
    emailjs
      .sendForm(
        "service_mxv2zpm",
        "template_2byincj",
        form.current,
        "eMIwx5WV73b950X_2"
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
    <Layout>
      <div id="contactContainer">
        <form onSubmit={sendEmail} ref={form}>
          <h1>Prenez contact avec Giveday !</h1>
          <label htmlFor="form">
            Prénom et nom :
            <input
              type="text"
              name="name"
              placeholder="Omer Simpson"
              required
            />
          </label>

          <label htmlFor="form">
            Email :
            <input
              type="email"
              name="email"
              placeholder="omer@simpson.fr"
              required
            />
          </label>

          <label htmlFor="form">
            Message :
            <textarea
              type="msg"
              row="14"
              name="message"
              placeholder="Votre message ici..."
              required
            />
          </label>

          <button className="buttonStyle btn-contact" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
