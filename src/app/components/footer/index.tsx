"use client";

import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FC5C36] text-white px-6 md:px-20 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🍔</div>
            <span className="font-bold text-lg">BURGER</span>
          </div>
          <p className="text-xs leading-relaxed uppercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="pt-2 text-xs space-y-1">
            <p>+91 9876543210</p>
            <p>mail@gmail.com</p>
            <p>xyz, anyware rode, sectore 4</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4">Service</h4>
          <ul className="space-y-2">
            <li>Burger</li>
            <li>Menu</li>
            <li>Hot Items</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linked In</li>
            <li>Tweeter</li>
            <li>Whatsapp</li>
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
      <div className="mt-12 text-xs text-center border-t border-white/30 pt-4">
        Burger.Com© All Right Reserve
      </div>
    </footer>
  );
}
