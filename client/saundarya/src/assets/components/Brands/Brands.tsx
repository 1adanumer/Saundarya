import React from "react";
import "./Brands.css";

const TrustedBrands: React.FC = () => {
  const brandLogos = [
    { id: 1, src: "saunlogo.png", alt: "Brand 1" },
    { id: 2, src: "saunlogo.png", alt: "Brand 2" },
    { id: 3, src: "saunlogo.png", alt: "Brand 3" },
    { id: 4, src: "saunlogo.png", alt: "Brand 4" },
    { id: 5, src: "saunlogo.png", alt: "Brand 5" },
    { id: 6, src: "saunlogo.png", alt: "Brand 6" },
    { id: 7, src: "saunlogo.png", alt: "Brand 7" },
    { id: 8, src: "saunlogo.png", alt: "Brand 8" },
    
  ];

  return (
    <section className="trusted-brands">
      <h2 className="section-title">Our Trusted Brands</h2>
      <div className="ticker-container">
        <div className="ticker">
          {brandLogos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="brand-logo"
            />
          ))}
          {/* Duplicate for seamless ticker */}
          {brandLogos.map((logo) => (
            <img
              key={`${logo.id}-duplicate`}
              src={logo.src}
              alt={`${logo.alt} Duplicate`}
              className="brand-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
