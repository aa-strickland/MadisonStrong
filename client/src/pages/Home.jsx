// src/pages/Home.jsx
import { useEffect, useState } from "react";
import "./Home.css";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const slides = [image1, image2, image3, image4, image5, image6];

export default function Home() {
  const [index, setIndex] = useState(0);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="home-hero">
        {/* LEFT: Text + buttons */}
        <div className="hero-left">
          <h2 className="hero-title">Helping Madison County Recover and Rebuild</h2>

          <p className="hero-mission">
            The mission of Madison County Strong LTRG is to coordinate and
            facilitate efficient, sustainable recovery efforts for individuals
            and families affected by disaster in Madison County. Through
            strategic partnerships and resource management, we aim to promote
            long-term resilience, restoration, and the well-being of our
            community.
          </p>

          <div className="hero-cta">
            <a
              href="/request-assistance"
              className="hero-btn request-btn"
            >
              Request Assistance
            </a>

            <a
              href="/volunteer"
              className="hero-btn volunteer-btn"
            >
              Volunteer
            </a>

            <a
              href="/donate"
              className="hero-btn donate-btn"
            >
              Donate
            </a>
          </div>
        </div>

        {/* RIGHT: Slideshow */}
        <div className="hero-right">
          <div className="hero-slideshow">
            {slides.map((src, i) => (
              <div
                key={i}
                className={`hero-slide ${i === index ? "active" : ""}`}
              >
                <img src={src} alt={`Relief effort ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW YOU CAN HELP SECTION */}
      <section className="home-help">
        <h3>How You Can Help</h3>
        <p className="help-intro">
          Whether you need assistance, want to volunteer, or are able to give
          financially, every action helps Madison County recover and rebuild.
        </p>

        <div className="help-grid">
          <div className="help-card">
            <h4>Request Assistance</h4>
            <p>
              If you or your family have been impacted by disaster in Madison
              County, let us know how we can support you.
            </p>
            <a
              href="/request-assistance"
              className="help-link"
            >
              Request Help
            </a>
          </div>

          <div className="help-card">
            <h4>Volunteer</h4>
            <p>
              Join neighbors, churches, and organizations working together on
              clean-up, repairs, and long-term recovery.
            </p>
            <a
              href="/volunteer"
              className="help-link"
            >
              Sign Up to Volunteer
            </a>
          </div>

          <div className="help-card">
            <h4>Donate</h4>
            <p>
              Your gifts provide materials, supplies, and support for families
              rebuilding their homes and lives.
            </p>
            <a
              href="/donate"
              className="help-link"
            >
              Give Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
