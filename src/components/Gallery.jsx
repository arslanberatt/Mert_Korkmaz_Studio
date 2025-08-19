import React from "react";
import { image1, image2, image3, image4 } from "../assets";
import styles from "../style";

const Gallery = () => {
  const images = [image1, image2, image3, image4];

  return (
    <section
      id="galeri"
      className={`${styles.paddingY} ${styles.flexCenter} md:py-16 flex-col relative`}
    >
      <h1
        className={`font-poppins font-semibold
              text-[28px] leading-[42px]
              sm:text-[36px] sm:leading-[56px]
              lg:text-[42px] md:leading-[72px] text-gradient my-4`}
      >
        Galeri
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 justify-start items-center flex-row px-4 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              className="w-full lg:max-w-[780px] md:max-w-[640px] pt-6 h-auto 
         [mask-image:linear-gradient(80deg,transparent_0%,black,transparent_100%),linear-gradient(180deg,transparent_0%,black,transparent_100%)] 
         [mask-composite:intersect]"
              src={img}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
