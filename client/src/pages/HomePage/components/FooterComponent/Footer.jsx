import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="container">
        <div>
          <div>
            <h2 className="title-font">CATEGORIES</h2>
            <nav>
              <li>
                <a>First Link</a>
              </li>
              <li>
                <a>Second Link</a>
              </li>
              <li>
                <a>Third Link</a>
              </li>
              <li>
                <a>Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
        <div>
          <div>
            <h2>CATEGORIES</h2>
            <nav>
              <li>
                <a>First Link</a>
              </li>
              <li>
                <a>Second Link</a>
              </li>
              <li>
                <a>Third Link</a>
              </li>
              <li>
                <a>Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
        <div>
          <div>
            <h2>CATEGORIES</h2>
            <nav>
              <li>
                <a>First Link</a>
              </li>
              <li>
                <a>Second Link</a>
              </li>
              <li>
                <a>Third Link</a>
              </li>
              <li>
                <a>Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
        <div>
          <div className="contactContainer">
            <h2>CONTACT</h2>
            <nav>
              <li>
                <a className="contactLink">
                  <FaPhoneAlt /> your contact
                </a>
              </li>
              <li>
                <a className="contactLink">
                  <FaEnvelope />
                  your email.com
                </a>
              </li>
              <li>
                <a className="contactLink">
                  <FaTwitter />
                  your twitter.com
                </a>
              </li>
              <li>
                <a className="contactLink">
                  <FaInstagram />
                  instagram.com
                </a>
              </li>
              <li>
                <a className="contactLink">
                  <FaFacebookF />
                  youremail.com
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="container ">
        <p>
          © 2023 Tourism Management System —
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @YourName
          </a>
        </p>
        
      </div>
    </footer>
  );
}

export default Footer;
