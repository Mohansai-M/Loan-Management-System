import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";
import Logo from "../logo.png";

function Footer()
{
    return (
      <footer className="footer">
        <div className="containy grid grid-footer">
          <div className="logo-col">
            <img src={Logo} alt="logo" className="logo" />

            <ul className="social-media">
              <li>
                <span className="footer-link">
                  <TwitterLogo
                    className="social-icon"
                    size={32}
                    weight="fill"
                  />
                </span>{" "}
              </li>
              <li>
                <span className="footer-link">
                  <InstagramLogo
                    className="social-icon"
                    size={32}
                    weight="fill"
                  />
                </span>
              </li>
              <li>
                <span className="footer-link">
                  <FacebookLogo
                    className="social-icon"
                    size={32}
                    weight="fill"
                  />
                </span>
              </li>
            </ul>
            <p className="copyright">
              Copyright &copy; 2022 by Meme Maker All rights reserved.
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                {" "}
                House No-201, 2nd Floor, Nandana Gardens,Vijayawada
              </p>
              <span className="footer-link" href="tel:234-987-299">
                234-987-299
              </span>
              <br />
              <arguments className="footer-link" href="mailto:mohansai.92000@gmail.com">
                mohansai.92000@gmail.com
              </arguments >
            </address>
          </div>
          <div className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <Link to="/login" className="footer-link">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/register" className="footer-link">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <Link to="/" className="footer-link">
                  About MemeMaker
                </Link>
              </li>
              <li>
                <span className="footer-link">
                  Tutorial
                </span>
              </li>
              <li>
                <span className="footer-link">
                  Meme Editor
                </span>
              </li>
              <li>
                <Link to="/mememaker" className="footer-link">
                  Search
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <div className="nav-col">
              <p className="footer-heading">Resources</p>
              <ul className="footer-nav">
                <li>
                  <span className="footer-link">
                    Privacy & Terms
                  </span>
                </li>
                <li>
                  <span className="footer-link">
                    Help Center
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );

}

export default Footer;