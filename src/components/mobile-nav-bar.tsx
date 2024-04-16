import { useContext } from "react";
import { MobileNavContext } from "../context/mobile-nav-context";
import { IoMenu } from "react-icons/io5";

const MobileNavBar = () => {
  const { toggleSideBar } = useContext(MobileNavContext);
  return (
    <nav className="mobile-nav-con">
      <header>
        <img
          alt=""
          src="/baby_bird_logo.jpg"
          className="w-14 h-14 rounded-full"
        />
      </header>

      <IoMenu
        onClick={toggleSideBar}
        className="w-7 h-7 cursor-pointer text-white"
      />
    </nav>
  );
};

export default MobileNavBar;
