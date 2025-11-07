import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCompoment.css";

function SecondSlider() {
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

  return (
    <section className="w-full mt-10 mx-auto overflow-hidden">
     
      <h3 className="text-2xl  ml-5 font-light mb-7 bt-7">IN THE SPOTLIGHT</h3>

      
      <div className="flex gap-4">
     
        <div className="w-1/2 ">
          <Slider {...settings}>
            <div>
              <img
                src="https://miraggiolife.com/cdn/shop/files/1_3_1d1d6381-3ca3-4123-b20b-15d3ee4fc2b8.jpg?v=1760686682&width=900"
                alt="Colorful Micros"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              />
            </div>
              <div>
              <img
                src="https://miraggiolife.com/cdn/shop/files/Mega_Menu_Images-Laptop_a9a91526-31ef-4633-b83c-693a372b1883.jpg?v=1757155027&width=630"
                alt="Minimalist Bags"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              />
            </div>
            <div>
              <img
                src="https://miraggiolife.com/cdn/shop/files/2-Out-of-office.jpg?v=1760686192&width=600"
                alt="Minimalist Bags"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              />
            </div>
          </Slider>
        </div>

    
        <div className="w-1/2">
          <Slider {...settings}>
            <div>
              <img
                src="https://miraggiolife.com/cdn/shop/files/2_9.jpg?v=1760689174&width=900"
                alt="Colorful Micros"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              />
            </div>
            <div>
              <img
                src="https://miraggiolife.com/cdn/shop/files/3_3_31ae00fe-797c-432d-98dd-0c79906df0ce.jpg?v=1760689174&width=900"
                alt="Minimalist Bags"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              />
            </div>
            <div>
              <img
                src="https://miraggiolife.com/cdn/shop/files/4_1_9c437fd0-1336-4a10-a79f-f3f1123c7a3d.jpg?v=1760689174&width=900"
                alt="Minimalist Bags"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default SecondSlider;

