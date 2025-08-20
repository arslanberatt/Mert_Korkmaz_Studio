import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section id="antrenman" className={`${layout.section} px-4 md:py-16`}>
      <div className={layout.sectionInfo}>
        <h2
          className="flex-1 font-poppins font-semibold
              text-[32px] leading-[42px]
              sm:text-[42px] sm:leading-[56px]
              lg:text-[52px] md:leading-[72px]"
        >
          Ringde Daha Güçlü,
          <br className="sm:block hidden" />
          Hayatta Daha Özgüvenli.
        </h2>
        <p
          className={`
            ${styles.paragraph} mt-5
            text-[14px] leading-[22px]     
            sm:text-[16px] sm:leading-[26px]
            md:text-[18px] md:leading-[28px]  
            lg:text-[20px] lg:leading-[30px]
            max-w-[470px]
          `}
        >
          Doğru antrenmanla gücünü artırabilir, disiplin kazanabilir ve
          kondisyonunu geliştirebilirsin. İster yeni başla ister profesyonel ol,
          sana en uygun programı bulabilirsin.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <div key={feature.id}>
            <FeatureCard key={feature.id} {...feature} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row sm:w-[720px] md:w-auto w-auto items-center p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="star"
        className="[mask-image:linear-gradient(80deg,transparent_0%,black,transparent_100%),linear-gradient(180deg,transparent_0%,black,transparent_100%)] 
         [mask-composite:intersect] w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p
        className={`
            ${styles.paragraph}
            text-[14px] leading-[22px]     
            sm:text-[16px] sm:leading-[26px]
            md:text-[18px] md:leading-[28px]  
            lg:text-[20px] lg:leading-[30px]
          `}
      >
        {content}
      </p>
    </div>
  </div>
);
