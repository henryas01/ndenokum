"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FavoriteBorder, ArrowForward } from "@mui/icons-material";

const items = [
  {
    id: 1,
    image: "/product4.png",
    title: "Baso Kering",
    price: "Rp. 20.000",
  },
  {
    id: 2,
    image: "/product5.png",
    title: "Kerupuk Tangkil",
    price: "Rp. 17.500",
  },
  {
    id: 3,
    image: "/product6.png",
    title: "Keripik Pisang",
    price: "Rp. 20.000",
  },
  {
    id: 4,
    image: "/product7.png",
    title: "Keripik Beras",
    price: "Rp. 20.000",
  },
  {
    id: 4,
    image: "/product8.png",
    title: "Keripik Pisang Manis",
    price: "Rp. 20.000",
  },
];

const HotItemsSlider = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-orange-100 text-center  bg-gradient-to-r from-orange-100 to-orange-400 min-h-screen">
      <h2 className="text-2xl font-bold text-orange-600 mb-2">
        — Produk Terlaris —
      </h2>
      <p className=" text-black mt-2  text-shadow-md mb-8">
        Nde Nok bangga mempersembahkan berbagai pilihan keripik istimewa:
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        loop
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="hot-slider"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-orange-500 rounded-2xl text-white relative overflow-hidden  pt-6 ">
              <div className="absolute top-3 right-3 text-white/80">
                <FavoriteBorder />
              </div>
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="p-5 relative">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold">{item.price}</span>
                  {/* <ShoppingBag fontSize="small" /> */}
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <ArrowForward fontSize="small" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotItemsSlider;
