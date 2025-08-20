import { quote, muayThai } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className="flex flex-col justify-between 
    md:px-10 md:py-12 px-6 py-8 
    w-[350px] sm:w-[320px] md:w-[370px] lg:w-[420px] 
    my-5 
    rounded-xl 
    transition duration-700 ease-in-out
    sm:bg-gradient-to-r sm:from-transparent sm:to-transparent
    bg-gradient-to-r from-gray-800 to-gray-900
    hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900
    active:bg-gradient-to-r active:from-gray-700 active:to-[]
    focus:bg-gradient-to-r focus:from-gray-700 focus:to-gray-900"
  >
    <img
      src={quote}
      alt="double_quote"
      className="w-[32px] h-[32px] 
      [mask-image:linear-gradient(80deg,transparent_0%,black,transparent_100%),linear-gradient(180deg,transparent_0%,black,transparent_100%)] 
      [mask-composite:intersect] object-contain"
    />
    <p
      className="font-poppins font-normal 
      sm:text-[16px] sm:leading-[26px] 
      text-white my-10"
    >
      {content}
    </p>

    <div className="flex flex-row items-center">
      <img
        src={muayThai}
        alt={name}
        className="w-[48px] h-[48px] p-2 rounded-full"
      />
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
