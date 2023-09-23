import React from "react";
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h5 className="non-selectable">
                    LegalHub
                </h5>
                <p className="non-selectable">
                At LegalHub, we're committed to providing you with the highest quality legal representation and guidance. Our experienced lawyers are ready to support you through any legal challenge you face. Let's get started on your legal journey today!
                </p>
            </div>
            <div className="col-md-4">
            <h5 className="non-selectable">
                    Quick Links
                </h5>
                <ul>
                  <li>Discover Legal Needs</li>
                  <li>Choose Legal Expertise</li>
                  <li>Meet Lawyers</li>
                  <li>Schedule Consultation</li>
                </ul>

            </div>
          <div className="col-md-4">
            <h5 className="pb-3">Contact Us</h5>
            <p><a href="tel:9810063577" className="anchortag"><FontAwesomeIcon icon={faPhone}/> &nbsp; +91 93157 84084</a></p>
            <p><a href="mailto:kakkarjitender@gmail.com" className="anchortag"><FontAwesomeIcon icon={faEnvelope}/> &nbsp; legalhub@gmail.com</a></p>
          </div>
          <div className="col-md-4">
            
          </div>
        </div>
        <hr />
        <div className="text-center non-selectable">
          <p>&copy; Copyright {new Date().getFullYear()} <b>LegalHub</b> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
