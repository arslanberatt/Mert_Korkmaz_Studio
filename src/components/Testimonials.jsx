import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="yorumlar"
      className={`${styles.flexCenter} pt-16 pb-16 lg:48 flex-col relative`}
    >
      <div className="w-full flex justify-center items-center flex-col mb-6 px-2 relative z-[1]">
        <div className="w-full flex  md:flex-row justify-center md:justify-around  items-center flex-col md:mt-0 mt-6">
          <h1
            className={` font-poppins font-semibold
              text-[32px] leading-[42px]
              sm:text-[36px] sm:leading-[56px]
              lg:text-[42px] md:leading-[72px]`}
          >
            Öğrencilerimiz <br className="sm:block hidden" /> Ne Diyor?
          </h1>
          <p
            className={`
            ${styles.paragraph} text-left mt-5 px-5
            text-[14px] leading-[22px]     
            sm:text-[16px] sm:leading-[26px]
            md:text-[18px] md:leading-[28px]  
            lg:text-[20px] lg:leading-[30px]
            max-w-[470px]
          `}
          >
            Burada sadece dövüşmeyi değil, disiplinli olmayı ve güçlü hissetmeyi
            de öğreniyoruz.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around w-full relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
