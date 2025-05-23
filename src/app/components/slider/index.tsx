"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FavoriteBorder, ShoppingBag, ArrowForward } from "@mui/icons-material";

const items = [
  { id: 1, image: "/burger1.png", title: "Veg Chizy Burger", price: "₹250.00" },
  { id: 2, image: "/burger2.png", title: "Veg Chizy Burger", price: "₹250.00" },
  { id: 3, image: "/burger3.png", title: "Veg Chizy Burger", price: "₹250.00" },
  { id: 4, image: "/burger4.png", title: "Veg Chizy Burger", price: "₹250.00" },
];

const HotItemsSlider = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-orange-100 text-center  bg-gradient-to-r from-orange-100 to-orange-400 min-h-screen">
      <h2 className="text-2xl font-bold text-orange-600 mb-2">— HOT ITEMS —</h2>
      <p className="text-sm text-white mb-8">
        Locally sourced, organic ingredients for a fresh and eco-friendly
        experience
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="hot-slider"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-orange-500 rounded-2xl text-white relative overflow-hidden p-4 pt-6 pb-8">
              <div className="absolute top-3 right-3 text-white/80">
                <FavoriteBorder />
              </div>
              <div className="flex justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-bold">{item.price}</span>
                <ShoppingBag fontSize="small" />
              </div>
              <div className="absolute bottom-0 right-0 p-2">
                <ArrowForward fontSize="small" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotItemsSlider;
