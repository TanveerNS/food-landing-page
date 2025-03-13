import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import FattoushSalad from "../../assets/png/Fattoush-salad.png";
import EggSalad from "../../assets/png/Egg-salad.png";
import VegSalad from "../../assets/png/Vegetable-salad.png";
import SrStar from "../../assets/png/fi-sr-star.png";
import { FaHeart } from "react-icons/fa";


const SpecialDishes = () => {
  return (
    <div className="container my-20 mx-auto">
      <h4 className="text-primary2 text-xl font-extrabold">Special Dishes</h4>
      <h4 className="text-[40px] font-semibold mt-4">
        Standout Dishes From Our Menu
      </h4>
      <div className="flex justify-end gap-4">
        <div className="bg-primary text-white rounded-full">
          <MdArrowBackIos className="text-6xl p-5 pl-[24px]" />
        </div>
        <div className="bg-primary text-white rounded-full">
          <MdArrowForwardIos className="text-6xl p-5 pl-[22px]" />
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-white shadow-lg rounded-3xl p-6 relative">
            <img src={FattoushSalad} alt="" className="!w-[80%] m-auto" />
            <h4 className="text-black font-semibold mt-6 mb-2 text-xl">Fattoush salad</h4>
            <p className="text-secondary2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <div className="flex justify-between text-black">
              <p className="text-xl font-semibold">
                <span className="text-secondary3 text-base pr-1">$</span>24.00
              </p>
              <p className="flex gap-2 text-secondary2 text-lg font-semibold items-center">
                <img src={SrStar} alt="" className="w-[20px] h-[20px]" />
                4.9
              </p>
            </div>
            <div className="h-10 w-12 bg-primary absolute top-0 right-0 rounded-se-xl rounded-es-xl">
              <div className="relative">
                <div className="absolute top-3 left-4 text-white">
                  <FaHeart />
                </div>
              </div>

            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl p-6 relative">
            <img src={VegSalad} alt="" className="!w-[80%] m-auto" />
            <h4 className="text-black font-semibold mt-6 mb-2 text-xl">Vegitable salad</h4>
            <p className="text-secondary2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <div className="flex justify-between text-black">
              <p className="text-xl font-semibold">
                <span className="text-secondary3 text-base pr-1">$</span>24.00
              </p>
              <p className="flex gap-2 text-secondary2 text-lg font-semibold items-center">
                <img src={SrStar} alt="" className="w-[20px] h-[20px]" />
                4.9
              </p>
            </div>
            <div className="h-10 w-12 bg-primary absolute top-0 right-0 rounded-se-xl rounded-es-xl">
              <div className="relative">
                <div className="absolute top-3 left-4 text-white">
                  <FaHeart />
                </div>
              </div>

            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl p-6 relative">
            <img src={FattoushSalad} alt="" className="!w-[80%] m-auto" />
            <h4 className="text-black font-semibold mt-6 mb-2 text-xl">Fattoush salad</h4>
            <p className="text-secondary2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <div className="flex justify-between text-black">
              <p className="text-xl font-semibold">
                <span className="text-secondary3 text-base pr-1">$</span>24.00
              </p>
              <p className="flex gap-2 text-secondary2 text-lg font-semibold items-center">
                <img src={SrStar} alt="" className="w-[20px] h-[20px]" />
                4.9
              </p>
            </div>
            <div className="h-10 w-12 bg-primary absolute top-0 right-0 rounded-se-xl rounded-es-xl">
              <div className="relative">
                <div className="absolute top-3 left-4 text-white">
                  <FaHeart />
                </div>
              </div>

            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl p-6 relative">
            <img src={EggSalad} alt="" className="!w-[80%] m-auto" />
            <h4 className="text-black font-semibold mt-6 mb-2 text-xl">Egg vegi salad</h4>
            <p className="text-secondary2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <div className="flex justify-between text-black">
              <p className="text-xl font-semibold">
                <span className="text-secondary3 text-base pr-1">$</span>24.00
              </p>
              <p className="flex gap-2 text-secondary2 text-lg font-semibold items-center">
                <img src={SrStar} alt="" className="w-[20px] h-[20px]" />
                4.9
              </p>
            </div>
            <div className="h-10 w-12 bg-primary absolute top-0 right-0 rounded-se-xl rounded-es-xl">
              <div className="relative">
                <div className="absolute top-3 left-4 text-white">
                  <FaHeart />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
