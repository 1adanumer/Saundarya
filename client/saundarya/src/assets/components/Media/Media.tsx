import React, { useState, useEffect } from "react";
import "./Media.css";

const testimonials = [
  {
    id: 1,
    image: "testimonial1.jpg",
    videoLink: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: 2,
    image: "testimonial2.jpg",
    videoLink: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: 3,
    image: "testimonial3.jpg",
    videoLink: "https://www.youtube.com/watch?v=example3",
  },
  {
    id: 4,
    image: "testimonial1.jpg",
    videoLink: "https://www.youtube.com/watch?v=example4",
  },
  {
    id: 5,
    image: "testimonial1.jpg",
    videoLink: "https://www.youtube.com/watch?v=example5",
  },
    {
        id: 6,
        image: "testimonial2.jpg",
        videoLink: "https://www.youtube.com/watch?v=example6",
    },
    {
        id: 7,
        image: "testimonial3.jpg",
        videoLink: "https://www.youtube.com/watch?v=example7",
    },
    {
        id: 8,
        image: "testimonial2.jpg",
        videoLink: "https://www.youtube.com/watch?v=example8",
    },
    
];

const MediaCoverages: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="media-coverages-container">
      {/* Media Coverages Section */}
      <section className="media-coverages">
        <div className="media-header">
          <h2 className="section-title">Media Coverages</h2>
          <span className="media-icon">📺</span>
        </div>
        <div className="media-image-container">
          <img
            src="Media Coverages.jpg"
            alt="Media Coverages"
            className="media-background"
          />
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="video-testimonials">
        <h2 className="section-title">Video Testimonials</h2>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <a
              key={testimonial.id}
              href={testimonial.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`testimonial ${
                index >= currentIndex && index < currentIndex + 4 ? "visible" : ""
              }`}
            >
              <img
                src={testimonial.image}
                alt={`Testimonial ${testimonial.id}`}
                className="testimonial-image"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MediaCoverages;
