import React from "react";
import Missionimg from "../assets/images/mission.png";
import Visionimg from "../assets/images/vision.png";
import Valueimg from "../assets/images/value.png";

function Mission() {
  return (
    <div className="background-image2 h-screen md:h-120 flex items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-20 text-white max-w-6xl">
        <div className="mision">
          <div
            className="flex justify-center pr-4" // pr-4 = gap between image and border
            style={{
              borderRight: "2px solid transparent",
              borderImage:
                "linear-gradient(180deg, rgba(247,239,138,0.73) 0%, rgba(145,140,81,0.5) 100%) 1",
            }}
          >
            <img src={Missionimg} className="w-10 md:w-40" />
          </div>
          <h1 className="text-center text-2xl my-3">
            OUR{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(247, 239, 138, 0.73) 15.38%, rgba(209, 202, 109, 0.5) 97.6%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              MISSION
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-center md:text-justify mx-9 md:mx-0">
            To deliver high-impact solutions in engineering, services, and
            investments with precision, accountability, and unwavering
            commitment to results.
          </p>
        </div>
        <div className="vision">
          <div
            className="flex justify-center pr-5" // pr-4 = gap between image and border
            style={{
              borderRight: "2px solid transparent",
              borderImage:
                "linear-gradient(180deg, rgba(247,239,138,0.73) 0%, rgba(145,140,81,0.5) 100%) 1",
            }}
          >
            <img src={Visionimg} className="w-10 md:w-40 mx-auto"></img>
          </div>

          <h1 className="text-center text-2xl my-3">
            OUR{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(247, 239, 138, 0.73) 15.38%, rgba(209, 202, 109, 0.5) 97.6%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              VISION
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-center md:text-justify mx-9 md:mx-0">
            To be a trusted leader across sectors—making measurable impact where
            it matters most. Making a tangible difference wherever we operate.
          </p>
        </div>
        <div className="values">
          <img src={Valueimg} className="w-10 md:w-40 mx-auto "></img>
          <h1 className="text-center text-2xl my-3">
            OUR{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(247, 239, 138, 0.73) 15.38%, rgba(209, 202, 109, 0.5) 97.6%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              VALUES
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-center md:text-justify mx-9 md:mx-0">
            Integrity, commitment, precision, and collaboration guide every
            decision we make. We focus on hands-on execution, long-term
            outcomes, and delivering value that lasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
