"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const testimonials = [
  {
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
    name: "Mandy Oza",
    title: "Xyz Company Ceo",
    rating: 4.5,
  },
  {
    text: "Super fast delivery and great taste. Loved it!",
    name: "John Doe",
    title: "Foodie",
    rating: 5,
  },
  {
    text: "Affordable and healthy. Just what I needed.",
    name: "Amelia Ray",
    title: "Startup Founder",
    rating: 4.5,
  },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  return (
    <div className="flex items-center justify-center text-orange-400 text-lg space-x-1 mb-2">
      {[...Array(full)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {half && <FaStarHalfAlt />}
    </div>
  );
};

export default function TestimonialSlider() {
  return (
    <section className="bg-gradient-to-br from-orange-200 to-orange-300 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-wide">
        — WHAT OUR CUSTOMER SAYS —
      </h2>

      <div className="relative max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.2,
            },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-10 mx-4 flex flex-col items-center text-orange-600">
                <div className="bg-orange-400 p-4 rounded-full mb-6">
                  <FaQuoteRight className="text-white text-2xl" />
                </div>
                <p className="text-sm md:text-base font-medium leading-relaxed mb-6">
                  {t.text}
                </p>
                {renderStars(t.rating)}
                <p className="font-semibold text-orange-600">{t.name}</p>
                <p className="text-sm text-orange-400">{t.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button className="custom-prev bg-white text-orange-500 p-3 rounded-xl shadow-lg">
            <HiChevronLeft size={22} />
          </button>
          <button className="custom-next bg-white text-orange-500 p-3 rounded-xl shadow-lg">
            <HiChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
