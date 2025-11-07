import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "EVERY DAY",
    to: "/MainTote",
    imageSrc:
      "https://miraggiolife.com/cdn/shop/files/3-Minimal.jpg?v=1760685969&width=400",
    imageAlt: "DAILY USE BAGS",
    x:"fade-up",
    y:"3000"
  },
  {
    id: 2,
    name: "AFTER HOURS",
    to: "/MainShoulder",
    imageSrc:
      "https://miraggiolife.com/cdn/shop/files/4-After-hours.jpg?v=1760685969&width=400",
    imageAlt: "DAILY USE BAGS",
     x:"fade-down",
    y:"3000"
  },
  {
    id: 3,
    name: "WORK",
    to: "/MainTopHandle",
    imageSrc:
      "https://miraggiolife.com/cdn/shop/files/2-Work.jpg?v=1760685969&width=400",
    imageAlt: "DAILY USE BAGS",
     x:"fade-up",
    y:"3000"
  },
  {
    id: 4,
    name: "AESTHETIC",
    to: "/MainAllBag",
    imageSrc:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/hand-messenger-bag/d/5/m/stylish-5-a006-shoulder-bag-aesthetic-14-original-imahg2n2nvq9fzn5.jpeg?q=90",
    imageAlt: "DAILY USE BAGS",
     x:"fade-down",
    y:"3000"
  },
];

function SecondSection() {
  return (
    <div >
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-light tracking-wide text-gray-900">
            MADE FOR EVERY MOMENT
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative" data-aos={product.x} data-aos-duration={product.y}>
                <Link to={product.to} onClick={() => window.scrollTo(0, 0)} >
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                </Link>

                <div className="mt-4 flex justify-between">
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.to}>{product.name}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
