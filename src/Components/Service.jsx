import React from "react";
import Mep from "../assets/images/mep.png";
import Deep from "../assets/images/deep cleaning.png";
import Heading from "../assets/images/heading.png";
import ArrowIcon from "../assets/images/Arrow 140.svg";

function Service() {
  return (
    <div className="py-16 px-4" id="services">
      {/* Title */}
      {/* <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        INSIDE DEVISE
      </h1> */}
      <img src={Heading} className="mx-auto w-1/2 md:w-3/12"></img>
      <p className="text-white max-w-2xl mx-auto p-4 my-4 text-sm sm:text-base md:text-lg text-center leading-relaxed">
        We operate in sectors where expertise meets impact. Each vertical
        reflects our hands-on approach, technical excellence, and commitment to
        real results, turning complex challenges into seamless solutions for our
        clients. Currently, our focus is on
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
        {/* Card 1 */}
        <div
          className="mep flex flex-col items-center gradient-border p-6 sm:p-8 rounded-xl transition-transform duration-300 hover:scale-105"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <img src={Mep} className="w-16 sm:w-20 my-4" alt="MEP Services" />
          <h1 className="text-white text-xl sm:text-2xl font-semibold text-center">
            MEP ENGINEERING <br /> SERVICES
          </h1>
          <p className="text-white my-3 text-sm sm:text-base text-justify leading-relaxed">
            With 30+ years of legacy, we deliver end-to-end MEP solutions that
            combine technical precision, innovative design, and flawless
            execution. From planning to commissioning, every project is
            efficient, reliable, and built to the highest standards.
          </p>
          <button className="my-3 px-8 sm:px-12 py-2 sm:py-3 rounded-[25px] border border-[#f7ef8ab9] bg-white/5 hover:bg-white/10 transition">
            <span
              className="bg-gradient-to-b from-[#f7ef8ab9] to-[#918c51] bg-clip-text text-transparent flex gap-2 items-center font-black text-sm sm:text-base"
              style={{ fontWeight: "500" }}
            >
              Learn More
              <img src={ArrowIcon} className="w-4 sm:w-5" alt="Arrow" />
            </span>
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="deep flex flex-col items-center gradient-border p-6 sm:p-8 rounded-xl transition-transform duration-300 hover:scale-105"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <img src={Deep} className="w-16 sm:w-20 my-4" alt="Deep Cleaning" />
          <h1 className="text-white text-xl sm:text-2xl font-semibold text-center">
            DEEP CLEANING & <br /> FM SERVICES
          </h1>
          <p className="text-white my-3 text-sm sm:text-base text-justify leading-relaxed">
            We create safe, efficient, and hygienic environments through
            tailored cleaning and facility management services. From routine
            maintenance to deep cleaning, our work enhances operational
            efficiency and workplace well-being—with precision and care.
          </p>
          <button className="my-3 px-8 sm:px-12 py-2 sm:py-3 rounded-[25px] border border-[#f7ef8ab9] bg-white/5 hover:bg-white/10 transition">
            <span
              className="bg-gradient-to-b from-[#f7ef8ab9] to-[#918c51] bg-clip-text text-transparent flex gap-2 items-center font-black text-sm sm:text-base"
              style={{ fontWeight: "500" }}
            >
              Learn More
              <img src={ArrowIcon} className="w-4 sm:w-5" alt="Arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
