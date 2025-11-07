import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCompoment.css"
function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <section className="w-full mx-auto overflow-hidden">
      {/* Slider Container */}
      <div className="relative">
        
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <img
              src="https://miraggiolife.com/cdn/shop/files/1-Colourful-micro_1.jpg?v=1760685694&width=2600"
              alt="Colorful Micros"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
            />
          </div>

          {/* Slide 2 */}
          <div>
            <img
              src="https://miraggiolife.com/cdn/shop/files/2-Minimalist.jpg?v=1760685694&width=2600"
              alt="Minimalist Bags"
               className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Text Section */}
      <div className="text-center px-4 py-6 md:px-14 md:py-10  Caption">
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Designed with intention, made for functionality. Our bags bring together
          timeless elegance and everyday versatility, crafted for moments that matter.
        </p>
      </div>
    </section>
  );
}

export default SliderComponent;