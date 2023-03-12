import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "@/images/logos/logo-image-only.svg";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="copyright p-sm fw-medium mb-0">
            <Link to={"/"} className="me-2">
              <Image
                src={Logo}
                width={32}
                height={32}
                alt="Peasy Forms"
                fluid
              />
            </Link>
            <span>PeasyForms is a @Copyright 2023 Process Talks</span>
          </p>
          <ul className="footer-nav list-unstyled">
            <li className="nav-item">
              <a href="mailTo:peasyforms@email.com" className="link">
                Send us an email
              </a>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="link">
                Terms of Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
