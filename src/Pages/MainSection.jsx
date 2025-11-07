import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
  "https://images.unsplash.com/photo-1512427691650-1c1bb1a5fa77",
  "https://images.unsplash.com/photo-1503602642458-232111445657",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
];

function MainSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + imagesPerPage >= images.length ? 0 : prev + imagesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - imagesPerPage : prev - imagesPerPage
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.slice(currentIndex, currentIndex + imagesPerPage).map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-60 object-cover rounded-md shadow-md"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white px-4 py-3 rounded-full hover:bg-black/60"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white px-4 py-3 rounded-full hover:bg-black/60"
      >
        ❯
      </button>
    </div>
  );
}

export default MainSection;
