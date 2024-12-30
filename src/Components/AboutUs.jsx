import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaUtensils, FaHandshake } from 'react-icons/fa'; // Importing icons from react-icons

const AboutUs = () => (
  <div className="container py-5">
    <div className="row align-items-center">
      {/* Left side with image */}
      <div className="col-md-6 mb-4 mb-md-0">
        <img
          src="aboutus.jpg" // Replace with your own image URL
          alt="About Us"
          className="img-fluid rounded-circle shadow"
        />
      </div>

      {/* Right side with content */}
      <div className="col-md-6">
        <h1 className="display-4 text-primary mb-3 ">About Us</h1>
        <p className="lead text-muted "><i>
          We are dedicated to providing high-quality, delicious meals that cater to every palate. Our mission is to create memorable dining experiences with every order.
          </i></p>

        <div className="mt-4">
          <h2 className="h3 text-success mb-3">
            <FaUtensils className="me-2" /> Our Mission
          </h2>
          <p class="fst-italic fw-bold fs-6">
            We focus on delivering meals made from fresh ingredients, ensuring the highest quality in every dish. Whether it's a quick snack or a gourmet feast, we strive to bring you the best.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="h3 text-warning mb-3">
            <FaHandshake className="me-2 fs-7" /> Join Us
          </h2>
          <p>
            Explore our menu and discover your new favorite dish. Let us bring the joy of food to your doorstep! We're always looking for ways to improve and expand our offerings.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="h3 text-info mb-3">Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We ensure the best ingredients for every dish.</li>
            <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority.</li>
            <li><strong>Innovation:</strong> We are always exploring new dishes and ideas.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
