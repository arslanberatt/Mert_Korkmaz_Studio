import { quote } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col md:px-10 md:py-12 px-6 py-8 rounded-[20px] w-[350px] sm:w-[320px] md:w-[370px] lg:w-[420px] my-5 feedback-card">
    <img
      src={quote}
      alt="double_quote"
      className="w-[32px] h-[32px] [mask-image:linear-gradient(80deg,transparent_0%,black,transparent_100%),linear-gradient(180deg,transparent_0%,black,transparent_100%)] 
         [mask-composite:intersect]  object-contain"
    />
    <p className="font-poppins font-normal md:text-[18px] md:leading-[32px] text-[14px] leading-[26px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
