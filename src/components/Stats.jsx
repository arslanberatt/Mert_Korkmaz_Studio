import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 gap-2 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex flex-1 justify-start items-center flex-row px-4 gap-2 `}
        >
          <h4 className="font-poppins font-semibold xs:text-[32px] text-[24px] xs:leading-[40px] leading-[30px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[16px] text-[12px] xs:leading-[20px] leading-[15px] text-gradient uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
