import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function VideoSlide() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const videoSlides = [
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_6457fb2d-d5a7-4707-a79c-af433c8ceef0.mp4?v=1747742865",
      route: `/Detailpage/${"SHOULDER008"}`,
      aos: "fade-up",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_92746fcc-975e-415c-98ea-3356b9f156f8.mp4?v=1741258297",
      route: `/Detailpage/${"TOTE001"}`,
      aos: "fade-down",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_d5727452-7d4a-423d-8b03-4d6ba11bbfa1.mp4?v=1741258165",
      route: `/Detailpage/${"SHOULDER005"}`,
      aos: "fade-up",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_f79de0e5-e7d1-464a-8459-569a46318e67.mp4?v=1713856523",
      route: `/Detailpage/${"SHOULDER001"}`,
      aos: "fade-down",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_103c768e-e451-4b3a-91a7-6412b73e3dca.mp4?v=1731916156",
      route: `/Detailpage/${"HB003"}`,
      aos: "fade-up",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_6c1ce8f7-a19b-4ae5-9a77-42cc28604abd.mp4?v=1747742852",
      route: `/Detailpage/${"CROSS010"}`,
      aos: "fade-down",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_cbb18390-8c5b-4bb6-809d-053168af746b.mp4?v=1741339270",
      route: `/Detailpage/${"LS003"}`,
      aos: "fade-up",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_305a4ca5-6ae1-429f-8c6f-e1f8d8cd3b59.mp4?v=1756204675",
      route: `/Detailpage/${"Tote02"}`,
      aos: "fade-down",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_58fd33cb-07a5-4f23-ba74-4cebb8c095c6.mp4?v=1731916256",
      route: `/Detailpage/${"MICRO005"}`,
      aos: "fade-up",
      duration: 1000,
    },
    {
      videoSrc:
        "https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_5c206ebb-0795-4f49-a910-ea11f28644cd.mp4?v=1747742844",
      route: `/Detailpage/${"SHOULDER002"}`,
      aos: "fade-down",
      duration: 1000,
    },
  ];

  const handleNavigation = (route) => {
    navigate(route);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Initialize scroll state on mount
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
      {/* Section Header */}
      <div className="text-left ml-3 py-8">
        <h2 className="text-2xl font-light text-black tracking-wide">
          THE STYLE EDIT
        </h2>
      </div>

      {/* Always show 5 videos with arrows */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black text-white rounded-full p-3 transition-all duration-300 shadow-lg"
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black text-white rounded-full p-3 transition-all duration-300 shadow-lg"
          >
            <FaChevronRight size={20} />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-6 px-4 scrollbar-hide"
        >
          {videoSlides.map((slide, index) => (
            <div
              key={index}
              data-aos={slide.aos}
              data-aos-duration={slide.duration}
              className="flex-shrink-0 w-72 group cursor-pointer"
              onClick={() => {
                handleNavigation(slide.route);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="relative overflow-hidden rounded-lg bg-white">
                <video
                  src={slide.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition-all duration-300 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoSlide;