"use client";
import { PlayArrow } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-100 to-orange-400 min-h-screen rounded-b-2xl ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 relative z-10">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          {/* <div className="bg-white inline-block px-4 py-1 rounded-md mb-4 shadow text-orange-500 font-medium">
            ⭐️ 4.5 | 5K+Nde Nok
          </div> */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Selamat Datang di Nde Nok
          </h1>
          <p className="text-black mt-2 mb-6 text-shadow-md ">
            Cita rasa keripik khas Kota Serang yang renyah, gurih, dan bikin
            nagih! Kami adalah UMKM lokal yang menghadirkan aneka camilan
            tradisional dengan sentuhan modern.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button
              startIcon={<PlayArrow />}
              variant="contained"
              sx={{ bgcolor: "#fff", color: "#f97316", fontWeight: "bold" }}
              onClick={() =>
                window.open(
                  "https://wa.me/081908442973?text=Halo%20Nde%27Nok!%20Saya%20tertarik%20untuk%20membeli%20produk%20anda.",
                  "_blank"
                )
              }
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 z-10">
          {/* Burger Image */}
          <Image
            src="/logo.png"
            alt="Burgers"
            width={1000}
            height={1000}
            className="z-20"
          />
        </div>
      </div>

      {/* Background Orange Shape */}
      <Image
        src="/rectangle_2.png"
        alt="Background shape"
        width={700}
        height={1100}
        className="absolute bottom-10 right-0 z-0 pointer-events-none select-none"
      />
    </div>
  );
};

export default HeroSection;
