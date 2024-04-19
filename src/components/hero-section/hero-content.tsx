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
          <p className="text-white font-medium text-lg lg:w-3/5">
            Babybird s a GameFI ecosystem currently in development. The mission
            statement of babybird is to connect Meme communities by one
            ecosystem.
          </p>

          <img src="/" alt="" />

          <p className="text-white font-medium text-lg lg:w-3/5">
            The developers of babybird team (including a full stack developer)
            have over 5 years of experience in various crypto projects
            throughout the space. We possess all of the skills and know-how
            required to build a successful project.
          </p>
        </div>

        <div className="hero-btn-con">
          <button className="hero-btn text-gray-500 bg-primary">
            BUY NOW II
          </button>
          <button className="hero-btn bg-white">
            <a href="https://t.me/babybirdsol" className="text-blue-600">
              Join Our Telegram
            </a>
          </button>
        </div>
      </aside>

      <aside className="w-full flex flex-col space-y-10 items-center justify-center lg:w-fit">
        <div className="w-0.5 hidden h-36 bg-white lg:block"></div>

        <div className="flex space-x-3 lg:flex-col lg:space-x-0 lg:space-y-3">
          <a
            href="https://t.me/babybirdsol"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
          >
            <FaTelegramPlane className="w-5 h-5 lg:w-5 lg:h-5" />
          </a>

          <a
            href="https://x.com/babybirdsol"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
          >
            <RiTwitterXLine className="w-5 h-5 lg:w-5 lg:h-5" />
          </a>
        </div>
      </aside>

      <div className="w-full p-5 flex items-center justify-center lg:hidden">
        <IoIosArrowDown className="w-7 h-7 text-white animate-bounce" />
      </div>
    </section>
  );
};

export default HeroContent;
