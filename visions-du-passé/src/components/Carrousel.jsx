import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Carousel.css"; // Assurez-vous de créer et d'inclure les styles CSS nécessaires
import OIP from "../assets/OIP.jpg";
import egyote from "../assets/egyote.jpg";

function Carousel() {
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = slidesRef.current.children;
    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;

    // Animation de défilement automatique
    gsap.to(slides, {
      x: `-${(slideCount - 1) * slideWidth}px`,
      duration: 5, // Durée du défilement en secondes
      repeat: -1, // Répétition infinie
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (slideCount * slideWidth)),
      },
    });
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-wrapper" ref={sliderRef}>
        <div className="carousel-slides" ref={slidesRef}>
          <div className="carousel-slide">
            <img src={OIP} alt="Image 1" />
          </div>
          <div className="carousel-slide">
            <img src={egyote} alt="Image 2" />
          </div>
          {/* Ajoutez plus de diapositives si nécessaire */}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
