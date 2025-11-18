// src/components/Header.jsx

import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <div className="brand">
          <img src={logo} alt="Madison County Strong logo" className="site-logo" />
          <div className="brand-text">
            <h1>Madison County Strong</h1>
            <p>Long Term Recovery Group</p>
          </div>
        </div>

        <div className="header-links">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/MadisonStrongVols/"
            target="_blank"
            rel="noreferrer"
            className="action-btn action-outline"
            aria-label="Visit Facebook"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 
                23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 
                1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 
                0-1.795.715-1.795 1.764v2.315h3.587l-.467 3.622H16.56V24h6.115C23.407 
                24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>

          {/* Donate */}
          <a href="/donate" className="action-btn action-solid">
            DONATE
          </a>

          {/* Phone */}
          <a href="tel:18508431917" className="action-btn action-outline" aria-label="Call Phone">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 
                1.1-.2c1.2.4 2.5.7 3.8.7c.6 0 1 .4 1 1V21c0 .6-.4 1-1 
                1C10 22 2 14 2 4c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 
                1c0 1.3.2 2.6.7 3.8c.1.4 0 .8-.3 1.1l-2.1 2z" />
            </svg>
          </a>

        </div>
      </div>
    </header>
  );
}
