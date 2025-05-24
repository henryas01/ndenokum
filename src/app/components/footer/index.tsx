"use client";

import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FC5C36] text-white px-6 md:px-20 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">
              <Image
                src="/logo.png"
                alt="logo"
                className="w-8 h-8"
                width={100}
                height={100}
              />
            </div>
            <span className="font-bold text-lg">Nde Nok</span>
          </div>
          <p className="text-xs leading-relaxed uppercase">
            UPPKA Kp. Gowok Sentul Sukajaya - Serang
          </p>
          <div className="pt-2 text-xs space-y-1">
            <p>MUI: 17100019110915</p>
            <p>Depnakes SP.NP 2932604P2KL</p>
            <p>UMKM Mawar, Nde’Nok Serang - Banten</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4">Service</h4>
          <ul className="space-y-2">
            <li>No Hp: 081908442973</li>
            <li>e-mail: oleh2nde.nok@gmail.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id= 61575724936852"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nde.nok?igsh=OTEzcjVub2RnY2hp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@oleh_oleh_khas_banten?_t=ZS-8wc2tRI9MAB&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tiktok
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/081908442973?text=Halo%20Nde%27Nok!%20Saya%20tertarik%20untuk%20membeli%20produk%20anda."
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4">Subscribe For New Update</h4>
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter Email..."
              className="flex-1 px-4 py-2 text-sm text-orange-500 outline-none"
            />
            <div className="px-3 text-orange-500 text-lg">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12  text-center border-t border-white/30 pt-4">
        <p>© 2023 Nde Nok. All rights reserved.</p>
      </div>
    </footer>
  );
}
