import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img1 from "../../assets/png/dish1.png";
import Img2 from "../../assets/png/dish2.png";
import Img3 from "../../assets/png/dish3.png";
import Img4 from "../../assets/png/dish4.png";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

const DishList = () => {
  return (
    <div className="container mx-auto my-12">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        freemode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img1} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Main Dish</h4>
            <h5 className="text-[20px] text-secondary2">(86 dishes)</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img2} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Break Fast</h4>
            <h5 className="text-[20px] text-secondary2">(12 break fast)</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img3} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Dessert</h4>
            <h5 className="text-[20px] text-secondary2">(48 dessert)</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img2} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Break Fast</h4>
            <h5 className="text-[20px] text-secondary2">(12 break fast)</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img1} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Break Fast</h4>
            <h5 className="text-[20px] text-secondary2">(12 break fast)</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img2} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Dessert</h4>
            <h5 className="text-[20px] text-secondary2">(48 dessert)</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img2} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Break Fast</h4>
            <h5 className="text-[20px] text-secondary2">(12 break fast)</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img4} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Dessert</h4>
            <h5 className="text-[20px] text-secondary2">(48 dessert)</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl bg-white shadow-lg px-2 py-3 w-full m-3 !p-12">
            <img src={Img1} className="w-[88px] h-[88px] m-auto bg-secondaryLight rounded-full p-3" />
            <h4 className="text-[24px] font-semibold">Break Fast</h4>
            <h5 className="text-[20px] text-secondary2">(12 break fast)</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DishList;
