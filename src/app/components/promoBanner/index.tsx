/* eslint-disable @next/next/no-img-element */
"use client";
import { PlayArrow } from "@mui/icons-material";
import { Button } from "@mui/material";

const PromoBanner = () => {
  return (
    <section className="bg-orange-500 px-6 md:px-20 py-10 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Text Section */}
        <div className="text-white space-y-4 z-10 relative">
          <h3 className="text-xl">Rasakan Lezatnya</h3>
          <h2 className="text-5xl font-bold">
            <span className="text-white">Camilan</span>{" "}
            <span className="text-white">Pilihan</span>
          </h2>
          <p className="text-lg">Dibuat dengan cinta & rasa khas dari Serang</p>
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

        {/* Image Section */}

        <div className="relative w-full h-[280px] md:h-[360px] mt-10 md:mt-0">
          <div className="absolute top-1 left-100 z-20 w-44 h-44">
            <div className="relative w-full h-full">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 0c9 0 12 8 20 8s14-2 18 4 4 10 0 18 8 11 8 20-8 12-8 20 2 14-4 18-10 4-18 0-11 8-20 8-12-8-20-8-14 2-18-4-4-10 0-18-8-11-8-20 8-12 8-20-2-14 4-18 10-4 18 0 11-8 20-8z"
                  className="fill-white"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="text-orange-500 font-extrabold text-lg leading-tight">
                  <span className="block text-xl md:text-2xl">Mantap</span>
                  <span className="block text-base md:text-xl">100%</span>
                </div>
              </div>
            </div>
          </div>

          <img
            src="/kripik_pisang_hero1.png"
            alt="Burger Promo"
            // fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Decorative Arrows & Lines (optional SVG or background graphics) */}
      {/* Add custom background if needed here */}
    </section>
  );
};

export default PromoBanner;
