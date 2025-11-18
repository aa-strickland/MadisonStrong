import { useState, useEffect } from "react";
import "./Home.css";

// Slideshow images (update names if different)
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Madison County Strong</h1>
          <p>
            Supporting disaster relief and long-term recovery for Madison County,
            FL. Together, we rebuild stronger.
          </p>
        </div>

        <div className="hero-slideshow">
          <div className="hero-slideshow-inner">
            <img src={slides[index]} alt="Relief Effort" />
          </div>
        </div>
      </div>
    </div>
  );
}
