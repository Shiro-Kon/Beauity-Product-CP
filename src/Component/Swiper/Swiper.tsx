import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import BlogArr from "../../utils/BlogArr";
import "./Swiper.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BlogSwiper: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentSlide(swiper.realIndex);
  };

  useEffect(() => {
    swiperRef.current = new SwiperCore(".swiper-container", {
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      allowTouchMove: false, // Disable swiping with touch/mouse
      autoplay: {
        delay: 3000, // Set the delay between autoplay slides (in ms)
        disableOnInteraction: false, // Autoplay will continue after user interactions
      },
      on: {
        slideChange: (swiper) => {
          handleSlideChange(swiper);
        },
      },
    });
  }, []);

  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {BlogArr.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="box-swiper">
                <a href="/blog">
                  {" "}
                  <img
                    className="img-swiper"
                    src={blog.image}
                    alt={blog.title}
                  />
                </a>
                <h3 className="title-swiper">{blog.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default BlogSwiper;
