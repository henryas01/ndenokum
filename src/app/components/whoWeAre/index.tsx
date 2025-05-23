import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="bg-orange-100 text-center  bg-gradient-to-r from-orange-100 to-orange-400 px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-bold text-center text-align-center text-orange-700 mb-8">
            — Siapa Nde Nok —
          </h2>

          <ul className="space-y-6 text-black text-shadow-md font-medium leading-relaxed text-[16px] text-left">
            <li>
              Nde Nok adalah UMKM dari Kota Serang yang berdiri dengan misi
              melestarikan camilan tradisional sambil membuka peluang ekonomi
              lokal. Kami memproduksi camilan sehat dan higienis dengan rasa
              otentik khas Banten.
            </li>

            <li>
              Keripik Pisang Manis, renyah, dan pas untuk teman ngopi. Keripik
              Baso Unik dan gurih, cocok untuk penyuka rasa pedas & gurih.
              Kerutang Camilan klasik dari singkong yang kriuknya bikin susah
              berhenti. Semprong Lembut, manis, dan harum kelapa – nostalgia
              rasa tradisional. Keripik Sukun Kaya rasa, gurih alami dari buah
              sukun pilihan.
            </li>
            <li>
              Dapatkan camilan favoritmu sekarang juga! Kami melayani pemesanan
              eceran dan grosir — cocok untuk oleh-oleh, hampers, hingga
              kebutuhan usaha Anda.
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-2 text-black text-shadow-mdfont-bold text-lg">
            <FaPaperPlane className="text-xl" />
            <a href="#" className="underline">
              Go
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-[350px] md:h-[400px] relative rounded-[32px] overflow-hidden bg-orange-500 p-4">
          <Image
            src="/logo.png"
            width={350}
            height={400}
            alt="Character with Burger"
            // fill
            className="object-contain m-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
