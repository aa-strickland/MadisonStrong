// src/pages/Volunteer.jsx
import { Link } from "react-router-dom";
import "./Volunteer.css";

const VOLUNTEER_URL =
  "https://form.jotform.com/242753887943069";

export default function Volunteer() {
  return (
    <div className="volunteer-page">
      <div className="volunteer-container">
        {/* Top navigation row */}
        <div className="volunteer-nav">
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>

          <a
            href={VOLUNTEER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="external-btn"
          >
            Open Volunteer Form in New Tab ↗
          </a>
        </div>

        <h2 className="volunteer-title">Volunteer with Madison County Strong</h2>

        <p className="volunteer-text">
          Volunteers are essential to long-term recovery in Madison County.
          From debris cleanup and repairs to distribution and administrative
          support, every hour you give helps neighbors rebuild their lives.
          <br />
          <strong>
            Please complete the form below, or open it in a new tab using the
            button above.
          </strong>
        </p>

        {/* Embedded JotForm volunteer signup */}
        <div className="form-wrapper">
          <iframe
            src={VOLUNTEER_URL}
            title="Volunteer Sign-Up Form"
            width="100%"
            height="900"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
