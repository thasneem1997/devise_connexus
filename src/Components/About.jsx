import React from "react";
import Line from "../assets/images/line.png";
import DCVideo from "../assets/images/DCVideo.mp4";

function About() {
  return (
    <div className="border mx-3 md:mx-20" id="about">
      <div className="background-image w-full min-h-screen bg-black">
        {/* Title Section */}
        <div className="flex p-10 md:p-30 gap-5">
          <img src={Line} className="w-1"></img>
          <h1 className="text-white text-1xl px-0 font-bold sm:text-2xl md:text-5xl ">
            OUR LEGACY IN
            <br></br>EVERY DETAIL
          </h1>
        </div>

        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-30  items-center pb-20">
            <div className="md:col-span-3 w-70 h-70 md:w-90 md:h-90 bg-black rounded-full overflow-hidden">
              <video
                src={DCVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-full "
              />
            </div>
            <div className="md:col-span-9 w-70 md:w-3/5 text-white text-md md:text-lg my-36 mx-2 md:mx-10">
              <p>
                We are a diversified business group operating across multiple
                sectors. Rooted in real results, not buzzwords! - our work spans
                integrated engineering, integrated services, real estate
                development, and investment holdings
              </p>
              <br></br>
              <p>
                What connects it all? A hands-on approach, long-term thinking,
                and a team committed to getting things done—on time and with
                purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
