import React, { useEffect } from "react";
import { gsap } from "gsap";
import Img1 from "../../assets/png/backgroundcover1.png";
import { FaPlay } from "react-icons/fa";

const AnimatedText = () => {
  useEffect(() => {
    gsap.fromTo(".heading", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

    gsap.fromTo(".paragraph", { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" });
  }, []);

  return (
    <div className="flex w-full container mx-auto my-16">
      <div className="flex-1 justify-center flex flex-col">
        <h1 className="font-semibold text-[62px] mt-6 mb-2">
          Dive into Delights
          <br /> Of Delectable <span className="text-primary">Food</span>
        </h1>
        <p className="text-2xl text-secondary2 my-4">
          Where Each Plate Weaves a Story of Culinary
          <br /> Mastery and Passionate Craftsmanship
        </p>
        <div className="flex mt-8">
          <button className="bg-primary text-stone-100 hover:bg-primary-800 font-medium rounded-full !px-6 lg:px-5 py-2 lg:py-2.5 mr-2 flex items-center gap-2">
            Order Now
          </button>
          <button className="text-stone-900 hover:bg-primary-800 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 flex items-center gap-2">
            Watch Video{" "}
            <span className="bg-white shadow-lg p-2 rounded-full">
              <FaPlay className="text-black" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-1">
        <img src={Img1} className="w-96" />
      </div>
    </div>
  );
};

export default AnimatedText;
