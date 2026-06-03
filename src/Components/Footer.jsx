import { FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>HRM Studio</h2>

          <p>
            A premium creative space designed for content creators, brands, and
            unforgettable moments.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#">Home</a>

          <a href="#">Series</a>

          <a href="#">Pricing</a>

          <a href="#">Gallery</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <FiPhone /> +234 000 000 0000
          </p>

          <p>
            <FiMail /> hello@hrmstudio.com
          </p>

          <p>
            <FiMapPin /> Lagos, Nigeria
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <FiInstagram />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HRM Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
