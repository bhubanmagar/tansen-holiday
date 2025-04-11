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
export default function App() {
  return (
    <div className="h-screen relative   border-[6px] border-orange-500 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2">
          <img src={logo} alt="Tansen Holidays Logo" className="h-14" />
        </div>

        {/* <h1 className="text-3xl  font-bold text-[#532874] mt-2">
          Find your travel partner
        </h1> */}
        <h2 className="w-full text-center mt-4 text-[#F1602A] font-bold text-[20px] pl-16">
          Our Services
        </h2>

        {/* Services */}
        <div className="flex flex-wrap justify-around mt-6  px-10">
          <Service icon={<FaPlane />} text="Flight Ticketing" />
          <Service icon={<FaHiking />} text="Travel & Trekking Packaging" />
          <Service icon={<FaSuitcase />} text="Tour Packaging" />
          <Service icon={<FaCar />} text="Car Rental" />
        </div>

        {/* Routes */}
        <div className="text-left w-full space-y-4">
          <h3 className="text-lg font-semibold mt-5 text-center   text-purple-800 mb-2">
            Our Daily Services Routes
          </h3>
          <div className="grid md:grid-cols-3 gap-5 ">
            {routes.map((items) => {
              return (
                <div className="mt-4">
                  <h1 className="font-normal text-center bg-[#FFF1EB] rounded-full py-2 text-[#F1602A]">
                    {items.route}
                  </h1>
                  <div className="">
                    <img
                      src={items.imgSrc}
                      alt=""
                      className="h-full w-full  "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="mt-8 absolute bottom-1 right-4">
        <a
          href="https://wa.me/XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 bg-green-100 text-green-800 font-semibold rounded-full border-2 border-green-200 hover:bg-green-200 transition"
        >
          <FaWhatsapp className="mr-2" /> Contact Us on WhatsApp
        </a>
      </div>
    </div>
  );
}

const Service = ({ icon, text }) => (
  <div className="flex items-center space-x-2 px-4 py-1  rounded-full text-gray-700 font-medium text-sm">
    {icon}
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

