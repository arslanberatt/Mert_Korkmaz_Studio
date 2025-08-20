import { silverMedal, dsaasda } from "../assets";
import styles from "../style";
import Typewriter from "typewriter-effect";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient text-base rounded-[10px] mb-2 ${styles.paragraph}`}
        >
          <img
            src={silverMedal}
            alt="indirim"
            className="w-[16px] h-[16px] mr-2"
          />
          <span className="text-white">Muay Thai </span>{" "}
          <Typewriter
            options={{
              strings: ["Türkiye Şampiyonu", "Avrupa Üçüncüsü"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="
              flex-1 font-poppins font-semibold
              text-[32px] leading-[42px]
              sm:text-[42px] sm:leading-[56px]
              lg:text-[52px] md:leading-[72px]  
            "
          >
            Muay Thai ile <br className="sm:block hidden" />
            <span className="text-gradient">GÜCÜNÜ</span> Keşfet
          </h1>
        </div>
        <div
          className={`
            ${styles.paragraph} mt-5
            text-[14px] leading-[22px]     
            sm:text-[16px] sm:leading-[26px]
            md:text-[18px] md:leading-[28px]  
            lg:text-[20px] lg:leading-[30px]
          `}
        >
          Profesyonel antrenman programlarıyla kondisyonunu artır, kendini
          savunmayı öğren, özgüvenini yükselt.
        </div>
        <div className="self-end md:mr-9 mt-4 items-center">
          <GetStarted />
        </div>
      </div>
      <img
        className="w-full lg:max-w-[780px] md:max-w-[640px] pt-6 h-auto 
         [mask-image:linear-gradient(85deg,transparent_5%,black,transparent_90%),linear-gradient(180deg,transparent_5%,black,transparent_80%)] 
         [mask-composite:intersect]"
        src={dsaasda}
      />
    </section>
  );
};

export default Hero;
