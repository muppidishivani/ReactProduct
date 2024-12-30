import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => (
  <div className="container my-1">
    <h1 className="text-center text-success mb-4 display-4">Contact Us</h1>
    <p className="text-center text-muted mb-5 fs-5">
      <i>
        We’re here to help! If you have any questions, comments, or concerns, don't hesitate to reach out to us. We'd love to hear from you!
      </i>
    </p>

    <div className="row align-items-center">
      {/* Left Column: Image with a Unique Shape */}
      <div className="col-lg-6 mb-4 text-center">
        <img
          src="con.jpg"
          alt="Contact Us"
          style={{ height: '70%', width: '70%', objectFit: 'cover' }}
          className="img-fluid rounded-circle shadow-lg"
        />
      </div>

      {/* Right Column: Contact Details and Social Media Links */}
      <div className="col-lg-6">
        <h2 className="h4 text-primary mb-3">Follow Us</h2>
        <p className="mb-3">
          Stay updated with our latest offers, news, and updates on social media!
        </p>
        <ul className="list-unstyled">
          <li className="mb-3">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary d-flex align-items-center">
              <FaFacebook size={30} className="me-3 text-primary" />
              <span>Facebook</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary d-flex align-items-center">
              <FaTwitter size={30} className="me-3 text-info" />
              <span>Twitter</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary d-flex align-items-center">
              <FaInstagram size={30} className="me-3 text-danger" />
              <span>Instagram</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary d-flex align-items-center">
              <FaLinkedin size={30} className="me-3 text-primary" />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>

        <h2 className="h4 text-primary mt-4 mb-3">Get in Touch</h2>
        <p className="mb-3">
          <strong>Email:</strong> <a href="mailto:info@foodmenu.com" className="text-decoration-none text-info">info@foodmenu.com</a>
        </p>
        <p className="mb-3">
          <strong>Phone:</strong> <a href="tel:+11234567890" className="text-decoration-none text-info">(123) 456-7890</a>
        </p>
        <p className="mb-3">
          <strong>Business Hours:</strong> Monday to Friday, 9 AM to 6 PM
        </p>
        <p className="text-muted mb-0">We strive to respond to all inquiries within 24 hours!</p>
      </div>
    </div>

    {/* Support Section */}
    <div className="text-center mt-5">
      <p className="fs-5 text-muted">For support, please fill out our <a href="/support" className="text-info">Support Form</a>.</p>
    </div>
  </div>
);

export default ContactUs;
