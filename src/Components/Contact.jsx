import React from "react";
import Line from "../assets/images/line.png";
import phnIcon from "../assets/images/phone-icon.png";
import locationIcon from "../assets/images/location-icon.png";
import emailIcon from "../assets/images/email-icon.png";

function Contact() {
  return (
    <div
      className="py-16 px-4 md:px-16"
      style={{ background: "#1C1C1C" }}
      id="contact"
    >
      {/* Heading */}
      <div className="flex items-start gap-4 mb-8">
        <img src={Line} className="w-1 md:w-2" alt="line" />
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          CONTACT
          <br /> DEVISE CONNEXUS
        </h1>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Info */}
        <div>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            We’d love to hear from you! Please fill out the form below or send a
            note directly with as much detail as possible to
            <span className="block mt-1 text-[#f7ef8ab9]">
              info@deviseconnexus.com
            </span>
          </p>

          <ul className="text-white mt-6 space-y-4 text-sm sm:text-base">
            <li className="flex gap-3 items-center">
              <img src={phnIcon} className="w-5 h-5" alt="phone" />
              +91 89218 35466
            </li>
            <li className="flex gap-3 items-center">
              <img src={emailIcon} className="w-5 h-5" alt="email" />
              info@deviseconnexus.com
            </li>
            <li className="flex gap-3 items-start">
              <img src={locationIcon} className="w-5 h-5 mt-1" alt="location" />
              MD Arcade, NH66-Pantheerankavu Calicut-673019
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-white font-bold text-lg sm:text-xl mb-4">
            Drop me a line!
          </h2>

          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                id="first-name"
                name="first-name"
                type="text"
                placeholder="Full Name"
                className="w-full px-3.5 py-2 text-sm sm:text-base text-white placeholder:text-gray-400 border-b border-gray-400 bg-transparent focus:outline-none"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-3.5 py-2 text-sm sm:text-base text-white placeholder:text-gray-400 border-b border-gray-400 bg-transparent focus:outline-none"
              />
            </div>

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full px-3.5 py-2 text-sm sm:text-base text-white placeholder:text-gray-400 border-b border-gray-400 bg-transparent focus:outline-none"
            />

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-md border border-[#f7ef8ab9] bg-white/5 hover:bg-white/10 transition text-sm sm:text-base font-semibold"
            >
              <span
                className="bg-gradient-to-b from-[#f7ef8ab9] to-[#918c51] bg-clip-text text-transparent font-bold"
                style={{ fontWeight: "500" }}
              >
                Send Message
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
