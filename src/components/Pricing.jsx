import React from "react";
import styles from "../style";

const packages = [
  {
    name: "Başlangıç Paketi",
    price: "₺8.000",
    duration: "1 Ay",
    features: [
      "8 Ders",
      "Temel teknikler",
      "Duruş & gard eğitimi",
      "Kardiyo & nefes kontrolü",
      "Isınma – soğuma düzeni",
    ],
    button: "Hemen Başla",
    highlight: false,
  },
  {
    name: "Gelişim Paketi",
    price: "₺10.000",
    duration: "1.5 Ay",
    features: [
      "12 Ders",
      "Teknik gelişim analizi",
      "Kombinasyon çalışmaları",
      "Güç & patlama antrenmanı",
      "Birebir tempo yönetimi",
    ],
    button: "Hemen Başla",
    highlight: true,
    recommended: true,
  },
  {
    name: "Profesyonel Paketi",
    price: "₺24.000",
    duration: "3 Ay",
    features: [
      "30 Ders",
      "Full teknik gelişim",
      "Sparring antrenmanları",
      "Gelişim raporu & takibi",
      "Koç desteğiyle dönüşüm süreci",
    ],
    button: "Hemen Başla",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="yorumlar"
      className={`${styles.flexCenter} md:pt-16 pb-96 mb-12 md:pb-72 lg:48 flex-col relative`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1
          className="
              flex-1 font-poppins font-semibold
              text-[32px] leading-[42px]
              sm:text-[42px] sm:leading-[56px]
              lg:text-[52px] md:leading-[72px]  
            "
        >
          Üye Ol, Eğitime Başla <br className="sm:block hidden" />
          <span className="text-gradient">ŞAMPİYON </span>Gibi Geliş.
        </h1>
        <p
          className={`
            ${styles.paragraph} pb-12 p-2
            text-[18px] leading-[26px]
          `}
        >
          Hedefine uygun paketi seç, birebir antrenman ile gelişimini hızlandır.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border p-12 border-red-600 flex flex-col justify-between relative rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-extrabold text-red-600">
                  {pkg.price}
                </span>
                <span className="ml-1 text-gray-400 text-lg">
                  / {pkg.duration}
                </span>
              </div>

              {pkg.recommended && (
                <span className="absolute top-4 right-4 bg-red-600 text-xs font-bold px-3 py-1">
                  ÖNERİLEN
                </span>
              )}
              <ul className="space-y-5 mb-8 text-left">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-600">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`py-3 cursor-pointer font-bold border border-white ${
                  pkg.highlight
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {pkg.button.toUpperCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
