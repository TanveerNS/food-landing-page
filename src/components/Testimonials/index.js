import Img1 from "../../assets/png/avatar1.png"
import Img2 from "../../assets/png/avatar1.png"
import Img3 from "../../assets/png/avatar1.png"
import Img4 from "../../assets/png/fi-sr-star.png"
import cover from "../../assets/png/mask-group.png"

const Testimonials = () => {
  return (
    <div className="container mx-auto my-16 flex">
      <div className="flex flex-1 justify-center">
        <img src={cover} alt="" className="h-[620px]" />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h4 className="text-primary2 font-semibold">Testimonials</h4>
        <h4 className="text-[60px] font-semibold mt-4 mb-8">
          What Our Customers <br />
          Say About Us
        </h4>
        <h5 className="mb-8">I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable</h5>
        <div className="flex items-center">
          <div className="flex">
            <img src={Img1} alt="" className="border-4 border-white rounded-t-full w-12" />
            <img src={Img2} alt="" className="border-4 border-white rounded-t-full w-12" />
            <img src={Img3} alt="" className="border-4 border-white rounded-t-full w-12" />
          </div>
          <div>
            <h6 className="font-semibold">Customer Feedback</h6>
            <p className="flex justify-center items-center">
              <img src={Img4} alt="" className="!w-3 !h-3" /><span className="mx-2">4.9</span>(18.6k Reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
