import { IoIosArrowDown } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

const HeroContent = () => {
  return (
    <section className="hero-content">
      <aside className="w-full flex flex-col space-y-12 lg:w-3/4">
        <div className="flex flex-col space-y-7">
          <h1 className="hero-main-text">BABY BIRD</h1>
          <p className="text-white font-medium text-xl">
            The next crypto leader IS COMING.
          </p>
          <p className="text-white font-medium text-xl lg:hidden">
            CA: 0x258903A8e68d5248dE85CF8a0
            <br />
            a173d9e046EdD98
          </p>

          <p className="hidden text-white font-medium text-xl lg:block">
            CA: 0x258903A8e68d5248dE85CF8a0a173d9e046EdD98
          </p>
        </div>

        <div className="hero-btn-con">
          <button className="hero-btn text-white bg-primary">BUY NOW II</button>
          <button className="hero-btn text-blue-600  bg-white">
            Join Our Telegram
          </button>
        </div>
      </aside>

      <aside className="w-full flex flex-col space-y-10 items-center justify-center lg:w-fit">
        <div className="w-0.5 hidden h-36 bg-white lg:block"></div>

        <div className="flex space-x-3 lg:flex-col lg:space-x-0 lg:space-y-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
            <FaTelegramPlane className="w-5 h-5 lg:w-5 lg:h-5" />
          </div>

          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
            <RiTwitterXLine className="w-5 h-5 lg:w-5 lg:h-5" />
          </div>
        </div>
      </aside>

      <div className="w-full p-5 flex items-center justify-center lg:hidden">
        <IoIosArrowDown className="w-7 h-7 text-white animate-bounce" />
      </div>
    </section>
  );
};

export default HeroContent;
