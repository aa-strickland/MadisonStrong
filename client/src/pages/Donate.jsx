// src/pages/Donate.jsx
import { Link } from "react-router-dom";
import "./Donate.css";

const DONATION_URL =
  "https://www.zeffy.com/en-US/donation-form/5560bc16-3abb-478b-9c77-527dae55b30d";

export default function Donate() {
  return (
    <div className="donate-page">
      <div className="donate-container">
        {/* Top navigation row */}
        <div className="donate-nav">
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>

          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="external-btn"
          >
            Open Donation Form in New Tab ↗
          </a>
        </div>

        <h2 className="donate-title">Support Madison County Strong</h2>

        <p className="donate-text">
          Your donation helps individuals and families in Madison County recover
          and rebuild after disaster. Gifts support materials, supplies,
          case management, and long–term recovery work coordinated through
          Madison County Strong Long Term Recovery Group.
          <br />
          <strong>
            You can give securely using the embedded form below or open it in a
            new tab using the button above.
          </strong>
        </p>

        {/* Embedded Zeffy donation form */}
        <div className="form-wrapper">
          <iframe
            src={DONATION_URL}
            title="Madison County Strong Donation Form"
            width="100%"
            height="900"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
