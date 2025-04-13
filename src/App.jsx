import React from "react";
import {
  FaCar,
  FaHiking,
  FaMapMarkerAlt,
  FaPlane,
  FaSuitcase,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "./assets/image/logo.png";
import haice from "./assets/image/haice.png";
import van from "./assets/image/van.png";
import bgImage from "./assets/image/background.jpg";

export default function App() {
  return (
    <div
      className="md:h-screen overflow-hidden w-full relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white to-black/0 backdrop-blur-sm"></div>

      <div className="px-4 md:px-6 relative z-10">
        {/* Logo */}
        <div className="flex justify-center items-center py-6 md:py-8">
          <img src={logo} alt="Tansen Holidays Logo" className="h-12 md:h-14" />
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto">
          {/* Services Title */}
          <h2 className="text-center text-[#F1602A] font-bold text-xl md:text-2xl mb-6">
            Our Services
          </h2>

          {/* Services */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
            <Service icon={<FaPlane />} text="Flight Ticketing" />
            <Service icon={<FaHiking />} text="Travel & Trekking Packaging" />
            <Service icon={<FaSuitcase />} text="Tour Packaging" />
            <Service icon={<FaCar />} text="Car Rental" />
          </div>

          {/* Routes */}
          <div className="w-full mb-20">
            <h3 className="text-center text-purple-800 font-semibold text-lg md:text-xl mb-6">
              Our Daily Services Routes
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {routes.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 rounded-lg p-3 hover:scale-105 transition-all duration-200 ease-in-out"
                >
                  <h1 className="font-normal border bg-orange-200 text-center rounded-full text-sm md:text-base py-2 text-[#F1602A] mb-3">
                    {item.route}
                  </h1>
                  <div className="h-40 sm:h-48 md:h-56 overflow-hidden rounded-md">
                    <img
                      src={item.imgSrc}
                      alt={item.route}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* WhatsApp Button - Fixed at bottom */}
      <div className="absolute md:bottom-4 bottom-3  left-1/2 transform -translate-x-1/2 z-20">
        <a
          href="https://wa.me/9851495555"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 md:px-6 md:py-2 bg-green-500 text-white font-semibold rounded-full border-2 border-green-200 hover:bg-green-400 transition-colors shadow-lg"
        >
          <FaWhatsapp className="mr-2 text-white h-5 w-5" />
          <div className="text-xs md:text-base text-nowrap">
            Contact on us WhatsApp
          </div>
        </a>
      </div>
    </div>
  );
}

const Service = ({ icon, text }) => (
  <div className="flex items-center space-x-2 px-3 md:px-4 py-1 rounded-full border border-zinc-100 bg-zinc-200 text-gray-700 font-medium text-xs md:text-sm">
    <span className="text-gray-700">{icon}</span>
    <span>{text}</span>
  </div>
);

const routes = [
  {
    id: 1,
    route: "Tansen - Kathmandu / Kathmandu-Tansen",
    imgSrc: haice,
  },
  {
    id: 2,
    route: "Tansen - Pokhara / Pokhara-Tansen",
    imgSrc: van,
  },
  {
    id: 3,
    route: "Tansen - Butwal - Bhairhawa - Sunauli",
    imgSrc: van,
  },
];

