/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

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
          <button className="mt-4 bg-white text-orange-600 font-semibold px-6 py-2 rounded-lg shadow hover:opacity-90 transition">
            Pesan Sekarang
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[280px] md:h-[360px] mt-10 md:mt-0">
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
