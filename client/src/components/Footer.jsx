// src/components/Footer.jsx
import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-logo-box">
          <img src={logo} alt="Madison County Strong logo" />
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>PO BOX 1159</p>
          <p>Madison, FL 32341</p>
          <p>
            Phone: <a href="tel:18508431917">850-843-1917</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:madisonstrongvolunteers@gmail.com">
              madisonstrongvolunteers@gmail.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
