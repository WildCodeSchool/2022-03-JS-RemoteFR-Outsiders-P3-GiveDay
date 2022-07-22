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
          <a href="https://www.giveday.fr/conditions_generales">
            <FaPenAlt /> Conditions generales
          </a>
        </li>

        <li className="social-link_items">
          <a
            href="https://m.facebook.com/pages/category/Website/Giveday-111827540281807/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
            Facebook
          </a>
        </li>

        <li className="social-link_items">
          <a
            href="https://www.instagram.com/giveday.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>
        </li>

        <li className="social-link_items">
          <a
            href="https://www.linkedin.com/company/giveday"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            Linked In
          </a>
        </li>
        <li className="social-link_items">
          <Link to="/Contact">
            <FaPaperPlane /> Nous contacter
          </Link>
        </li>
      </ul>
    </footer>
  );
}
