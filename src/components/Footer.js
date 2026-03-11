import React from 'react'
import "./Footer.css"
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaTruck,
  FaCheckCircle,
  FaBoxOpen,
  FaMedal,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="footer">

      <div className="footer-features">
        <div className="feature">
          <FaBoxOpen />
          <p>Free delivery</p>
        </div>

        <div className="feature">
          <FaCheckCircle />
          <p>Museum Standard</p>
        </div>

        <div className="feature">
          <FaTruck />
          <p>Cash on Delivery</p>
        </div>

        <div className="feature">
          <FaMedal />
          <p>Premium Materials</p>
        </div>
      </div>

      <hr />

    
      <div className="footer-content">

        <div className="footer-section">
          <h3>TALK TO US</h3>
          <p>We are always here for you.</p>
          <p>Whatsapp: +91 8287 47 8560</p>
          <p>Email: support@dessineart.com</p>

          <div className="footer-logo">DA</div>

          <div className="social-icons">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-section">
          <h3>BUSINESS</h3>
          <p>Join as an Artist</p>
          <p>For Architects & Designers</p>
          <p>Enquiries</p>
          <p>Bulk Orders</p>
          <p>Contact us</p>
        </div>

        <div className="footer-section">
          <h3>INFORMATION</h3>
          <p>About Us</p>
          <p>Art Buying Guide</p>
          <p>Terms of Service</p>
          <p>Blog</p>
          <p>FAQs</p>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Sign up for exclusive offers and more.</p>
          <input type="email" placeholder="Enter email" />
          <button>SIGN UP</button>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 Dessine Art.</p>
        <div className="bottom-links">
          <span>Privacy Policy</span>
          <span>Track my order</span>
          <span>Refund Policy</span>
          <span>Shipping Policy</span>
          <span>Copyrights</span>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Footer
