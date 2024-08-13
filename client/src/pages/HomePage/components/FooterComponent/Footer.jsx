import "./footer.css";
import { FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="container">
        <>
          <div>
            <h2 className="title-font">SERVICES</h2>
            <nav>
              <li>
                <a href="#">Ride Booking</a>
              </li>
              <li>
                <a href="#">Driver Signup</a>
              </li>
              <li>
                <a href="#">Passenger Signup</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
            </nav>
          </div>
        </>
        <>
          <div>
            <h2>COMPANY</h2>
            <nav>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </nav>
          </div>
        </>
        <>
          <div>
            <h2>LEGAL</h2>
            <nav>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </nav>
          </div>
        </>
        <>
          <div className="social-links">
            <h2>CONTACT</h2>
            <nav>
              <li>
                <a href="#" className="contactLink">
                  <FaPhoneAlt /> +1 234 567 890
                </a>
              </li>
              <li>
                <a href="mailto:support@rideshare.com" className="contactLink">
                  <FaEnvelope /> support@rideshare.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourtwitter"
                  className="contactLink"
                >
                  <FaTwitter /> @YourTwitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yourinstagram"
                  className="contactLink"
                >
                  <FaInstagram /> @YourInstagram
                </a>
              </li>
            </nav>
          </div>
        </>
      </div>
      <div className="copyright">
        <p>© 2023 Ride Sharing App — @Besu</p>
      </div>
    </footer>
  );
}

export default Footer;
