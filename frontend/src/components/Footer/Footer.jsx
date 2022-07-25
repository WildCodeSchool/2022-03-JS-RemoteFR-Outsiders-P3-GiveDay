import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaPenAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer id="give-footer">
      <ul className="social-links">
        <li className="conditions-link_items">
          <Link to="/conditionsGenerales">
            {" "}
            <FaPenAlt size={20} /> Conditions générales
          </Link>
        </li>

        <li className="social-link_items">
          <a
            href="https://m.facebook.com/pages/category/Website/Giveday-111827540281807/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={30} /> Facebook
          </a>
        </li>

        <li className="social-link_items">
          <a
            href="https://www.instagram.com/giveday.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} />
            Instagram
          </a>
        </li>

        <li className="social-link_items">
          <a
            href="https://www.linkedin.com/company/giveday"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
            Linked In
          </a>
        </li>
        <li className="social-link_items">
          <Link to="/Contact">
            <FaPaperPlane size={22} /> Nous contacter
          </Link>
        </li>
      </ul>
    </footer>
  );
}
