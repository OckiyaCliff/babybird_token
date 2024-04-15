interface Prop {
  title: { bold: string; normal: string };
  text: string;
}

const WhyBabyBirdReason = ({ text, title }: Prop) => {
  return (
    <div className="w-full flex flex-col space-y-5 lg:w-[25%]">
      <h3 className="text-primary font-semibold">
        <span className="text-6xl lg:text-2xl">{title.bold}</span>{" "}
        <span className="text-2xl">{title.normal}</span>
      </h3>

      <p className="text-white text-lg font-semibold lg:text-base">{text}</p>
    </div>
  );
};

export default WhyBabyBirdReason;
