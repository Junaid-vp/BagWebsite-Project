// ============================================================================
// 📌 SecondSlider.jsx — Dual image slider (react-slick)
// - Two synced visual sliders side-by-side (independent settings)
// - Uses autoplay, fade effect and responsive heights
// ============================================================================

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCompoment.css";
import { useNavigate } from "react-router-dom";

function SecondSlider() {
  const navigate = useNavigate();

  // ------------------------------------------------------------------------
  // Slider configuration (shared)
  // ------------------------------------------------------------------------
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
  };

  // ------------------------------------------------------------------------
  // Slide data to reduce repetition
  // ------------------------------------------------------------------------
  const leftSlides = [
    {
      id: "MICRO001",
      src: "https://miraggiolife.com/cdn/shop/files/1_3_1d1d6381-3ca3-4123-b20b-15d3ee4fc2b8.jpg?v=1760686682&width=900",
      alt: "Colorful Micros"
    },
    {
      id: "LS010",
      src: "https://miraggiolife.com/cdn/shop/files/noel-laptop-bag-477712.jpg?v=1756802409&width=700",
      alt: "Minimalist Bags"
    },
    {
      id: "MICRO010",
      src: "https://miraggiolife.com/cdn/shop/files/2-Out-of-office.jpg?v=1760686192&width=600",
      alt: "Minimalist Bags"
    }
  ];

  const rightSlides = [
    {
      id: "MICRO011",
      src: "https://miraggiolife.com/cdn/shop/files/2_9.jpg?v=1760689174&width=900",
      alt: "Colorful Micros"
    },
    {
      id: "MICRO009",
      src: "https://miraggiolife.com/cdn/shop/files/3_3_31ae00fe-797c-432d-98dd-0c79906df0ce.jpg?v=1760689174&width=900",
      alt: "Minimalist Bags"
    },
    {
      id: "MICRO001",
      src: "https://miraggiolife.com/cdn/shop/files/4_1_9c437fd0-1336-4a10-a79f-f3f1123c7a3d.jpg?v=1760689174&width=900",
      alt: "Minimalist Bags"
    }
  ];

  // ------------------------------------------------------------------------
  // Click handler
  // ------------------------------------------------------------------------
  const handleSlideClick = (productId) => {
    navigate(`/Detailpage/${productId}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ------------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------------
  return (
    <section className="w-full mt-10 mx-auto overflow-hidden cursor-pointer">
      {/* Title */}
      <h3 className="text-2xl ml-5 font-light mb-7 bt-7">IN THE SPOTLIGHT</h3>

      {/* Two-column slider layout */}
      <div className="flex gap-4">
        {/* Left slider */}
        <div className="w-1/2" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <Slider {...settings}>
            {leftSlides.map((slide, index) => (
              <div 
                key={index}
                onClick={() => handleSlideClick(slide.id)}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right slider */}
          <div className="w-1/2" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <Slider {...settings}>
            {rightSlides.map((slide, index) => (
              <div 
                key={index}
                onClick={() => handleSlideClick(slide.id)}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default SecondSlider;