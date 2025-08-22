import React from "react";
import Logo from "../assets/images/logo.png";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Youtube from "../assets/images/youtube.svg";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 ">
        {/* Left Section */}
        <div>
          <img src={Logo} alt="Logo" className="w-24 mb-4" />
          <p className="text-sm leading-relaxed max-w-sm">
            Revive Your Space – Restores beauty, hygiene, and freshness in every
            corner.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <img src={Instagram} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={Facebook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={Youtube} alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row gap-12 md:ml-auto">
          <div>
            <h3 className="font-semibold text-white mb-3">OUR BUSINESS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Specialized Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pest Control
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center md:text-left text-sm md:pl-20">
        © 2025 DEVISE CONNEXUS
      </div>
    </footer>
  );
}

export default Footer;
