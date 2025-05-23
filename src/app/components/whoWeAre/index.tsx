import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="bg-orange-100 text-center  bg-gradient-to-r from-orange-100 to-orange-400 px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-bold text-center md:text-left text-orange-700 mb-8">
            — WHO WE ARE —
          </h2>

          <ul className="space-y-6 text-white font-medium leading-relaxed text-[16px]">
            <li>
              Community-focused initiatives such as partnerships with local
              farms or environmental organizations.
            </li>
            <li>
              Social media integration for sharing photos, reviews, and engaging
              with the veggie burger community.
            </li>

            <hr className="w-10 border-t-2 border-white my-2" />

            <li>
              Nutritional information provided for each menu item, catering to
              health-conscious customers.
            </li>
            <li>
              Wide range of veggie burger options including classic, gourmet,
              and customizable choices.
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-2 text-white font-bold text-lg">
            <FaPaperPlane className="text-xl" />
            <a href="#" className="underline">
              Sher
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-[350px] md:h-[400px] relative rounded-[32px] overflow-hidden bg-orange-500 p-4">
          <Image
            src="/who-we-are.png"
            width={350}
            height={400}
            alt="Character with Burger"
            // fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
