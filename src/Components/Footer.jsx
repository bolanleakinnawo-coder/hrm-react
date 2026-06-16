import { FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            HRM
            <span className="logo-subtext"> Aesthetic Haven</span>
          </Link>

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
            <FiPhone /> <a href="tel:09062327249">09062327249</a> /{" "}
            <a href="tel:07015991635">07015991635</a>
          </p>

          <p>
            <FiMapPin /> Ilorin, Nigeria
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <p>
            <FiInstagram />{" "}
            <a
              href="https://www.instagram.com/HRM_aesthetic_haven"
              target="_blank"
              rel="noopener noreferrer"
            >
              HRM_aesthetic_haven
            </a>
          </p>

          <p>
            <SiTiktok />{" "}
            <a
              href="https://www.tiktok.com/@HRM_aesthetic_haven1"
              target="_blank"
              rel="noopener noreferrer"
            >
              HRM_aesthetic_haven
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} HRM Aesthetic Haven. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
