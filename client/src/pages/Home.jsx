// src/pages/Home.jsx
import { useEffect, useState } from "react";
import "./Home.css";

// Make sure these filenames match exactly what's in src/assets
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
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home">
      <section className="home-hero">
        {/* LEFT: Text + buttons */}
        <div className="hero-left">
          <h2 className="hero-title">
            Helping Madison County Recover and Rebuild
          </h2>

          <p className="hero-mission">
            The mission of Madison County Strong LTRG is to coordinate and
            facilitate efficient, sustainable recovery efforts for individuals
            and families affected by disaster in Madison County. Through
            strategic partnerships and resource management, we aim to promote
            long-term resilience, restoration, and the well-being of our
            community.
          </p>

          <div className="hero-cta">
            <a href="/request-assistance" className="hero-btn primary">
              Request Assistance
            </a>
            <a href="/volunteer" className="hero-btn secondary">
              Volunteer
            </a>
            <a href="/donate" className="hero-btn tertiary">
              Donate
            </a>
          </div>
        </div>

        {/* RIGHT: Slideshow with red border (styled in Home.css) */}
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
    </div>
  );
}
