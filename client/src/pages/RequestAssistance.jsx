// src/pages/RequestAssistance.jsx
import { Link } from "react-router-dom";
import "./RequestAssistance.css";

export default function RequestAssistance() {
  return (
    <div className="request-page">
      <div className="request-container">
        
        {/* Navigation Buttons */}
        <div className="request-nav">
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>

          <a
            href="https://form.jotform.com/242538014708051"
            target="_blank"
            rel="noopener noreferrer"
            className="external-btn"
          >
            Open Form in New Tab ↗
          </a>
        </div>

        {/* Page Title */}
        <h2 className="request-title">Request Assistance</h2>

        <p className="request-text">
          If you or your family have been impacted by disaster in Madison County,
          please complete the form below so we can better assist you.
          <br />
          <strong>
            If the form does not display correctly, you can open it directly
            using the link above.
          </strong>
        </p>

        {/* Embedded JotForm */}
        <div className="form-wrapper">
          <iframe
            src="https://form.jotform.com/242538014708051"
            title="Request Assistance Form"
            width="100%"
            height="900"
            frameBorder="0"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
