import React, { useState, useEffect } from "react";
import "./Media.css";

const testimonials = [
  {
    id: 1,
    image : "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fbanner%2FKavita-Kaushik.png&w=384&q=75",
    videoLink: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: 2,
    image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fbanner%2FShilpa-Shetty.png&w=384&q=75",
    videoLink: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: 3,
    image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fbanner%2FShraddha-Gurung.png&w=384&q=75",
    videoLink: "https://www.youtube.com/watch?v=example3",
  },
  {
    id: 4,
    image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fbanner%2FPooja-Chaavi_.png&w=384&q=75",
    videoLink: "https://www.youtube.com/watch?v=example4",
  },
  {
    id: 5,
    image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fbanner%2FHina-Khan.png&w=384&q=75",
    videoLink: "https://www.youtube.com/watch?v=example5",
  },
  {
    id: 6,
    image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fbanner%2FShilpa-Shetty.png&w=384&q=75",
    videoLink: "https://www.youtube.com/watch?v=example6",
  },
  {
    id: 7,
    image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fbanner%2FShraddha-Gurung.png&w=384&q=75",
    videoLink: "https://www.youtube.com/watch?v=example7",
  },
  {
    id: 8,
    image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fbanner%2FShilpa-Shetty.png&w=384&q=75",
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
        
        <div className="media-images-grid">
          <div className="media-image">
            <img src="https://www.yesmadam.com/_next/image?url=%2Fnews-1.png&w=640&q=75" alt="Media 1" />
          </div>
          <div className="media-image">
            <img src="https://www.yesmadam.com/_next/image?url=%2Fnews-2.png&w=828&q=75" alt="Media 2" />
          </div>
          <div className="media-image">
            <img src="https://www.yesmadam.com/_next/image?url=%2Fnews-3.png&w=640&q=75" alt="Media 3" />
          </div>
          <div className="media-image">
            <img src="https://www.yesmadam.com/_next/image?url=%2Fnews-4.png&w=640&q=75" alt="Media 4" />
          </div>
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