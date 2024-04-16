import { PARTNER_LOGOS } from "../utils/constant";

const OurPartners = () => {
  return (
    <section className="w-full flex flex-col p-7 space-y-20 justify-center bg-black lg:space-y-10 lg:py-20 lg:items-center">
      <h2 className="text-center text-3xl font-semibold text-white">
        OUR PARTNERS
      </h2>

      <aside className="w-ful flex flex-col space-y-20 items-center lg:w-5/6 lg:space-y-0 lg:grid lg:grid-cols-4">
        {PARTNER_LOGOS.map((logo, i) => (
          <div
            key={i}
            className="w-3/5 transition hover:animate-pulse lg:py-14"
          >
            <img src={logo} alt="w-full h-full" />
          </div>
        ))}
      </aside>
    </section>
  );
};

export default OurPartners;
