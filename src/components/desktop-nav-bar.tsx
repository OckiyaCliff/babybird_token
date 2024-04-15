import { IoIosArrowDown } from "react-icons/io";

const DesktopNavBar = () => {
  return (
    <nav className="w-full bg-black hidden px-20 py-3 justify-between items-center lg:flex">
      <header>
        <img src="/baby_logo.png" alt="" className="w-16 h-20" />
      </header>
      <div className="flex space-x-5">
        <a href="" className="link-style">
          Gate.IO
        </a>
        <a href="" className="link-style">
          BITGET
        </a>
        <a href="" className="link-style">
          MEXC
        </a>
        <a href="" className="link-style">
          CERTIX Audit
        </a>
        <a href="" className="link-style">
          White Paper
        </a>
        <span className="flex items-center  space-x-1 link-style">
          <p>MORE</p>
          <IoIosArrowDown className="w-6 h-6" />
        </span>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
