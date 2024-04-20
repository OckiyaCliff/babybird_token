const DesktopNavBar = () => {
  return (
    <nav className="w-full bg-black hidden px-20 py-3 justify-between items-center lg:flex">
      <header>
        <img
          src="/baby_bird_logo.jpg"
          alt=""
          className="w-20 h-20 rounded-full"
        />
      </header>

      <div className="flex space-x-5">
        {/* <a href="" className="link-style">
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
        </a> */}

        <a href="" className="link-style">
          Tokenomics
        </a>

        <a href="" className="link-style">
          RoadMap
        </a>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
