import React, { useState } from "react";
import "./Testimonials.css";

interface Testimonial {
  image: string;
  name: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    image: "https://www.yesmadam.com/_next/image?url=%2FDona.webp&w=96&q=75",
    name: "Srishti Kainth",
    rating: 5,
    review:
      "I recently booked a facial service for my mother with Preeti Chauhan, and I couldn't be more pleased. Her attention to detail and skill are unmatched!",
  },
  {
    image: "https://www.yesmadam.com/_next/image?url=%2FSaloni.webp&w=96&q=75",
    name: "Divya Sharma",
    rating: 4,
    review:
      "The waxing and body care services were very professional. I'm very satisfied and would highly recommend it.",
  },
  {
    image: "https://www.yesmadam.com/_next/image?url=%2FAbhishek.webp&w=96&q=75",
    name: "Rahul Verma",
    rating: 4.5,
    review:
      "I tried their massage services, and the experience was amazing. Great attention to customer satisfaction.",
  },
    {
        image: "https://www.yesmadam.com/_next/image?url=%2FDona.webp&w=96&q=75", 
        name: "Saloni",
        rating: 5,
        review: "I recently booked a facial service for my mother with Preeti Chauhan, and I couldn't be more pleased. Her attention to detail and skill are unmatched!",
    },
    {
        image: "https://www.yesmadam.com/_next/image?url=%2FKabita.webp&w=96&q=75",
        name: "Shreya",
        rating: 5,
        review: "I recently booked a facial service for my mother with Preeti Chauhan, and I couldn't be more pleased. Her attention to detail and skill are unmatched!",
    },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-section">
      <h2>Love from our customers</h2>
      <div className="testimonials-slider">
        <button className="arrow-button left" onClick={handlePrev}>
          &#8249;
        </button>
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 320}px)`, // Adjust slide width
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <div className="rating">
                {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
                {testimonial.rating % 1 !== 0 && <span>⭐</span>}
              </div>
              <p>{testimonial.review}</p>
            </div>
          ))}
        </div>
        <button className="arrow-button right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
