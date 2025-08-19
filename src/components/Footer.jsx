import styles from "../style";
import { contactItems } from "../constants";

const Footer = () => {
  return (
    <section
      id="konum"
      className={`${styles.flexCenter} flex-row relative pt-20 pb-10 md:pt-28`}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        aria-hidden
      >
        <defs>
          <pattern
            id="grid-lines"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 240L240 0"
              stroke="white"
              strokeWidth="0.7"
              opacity="0.15"
            />
            <path
              d="M120 240L360 0"
              stroke="white"
              strokeWidth="0.7"
              opacity="0.15"
            />
            <path
              d="M-120 240L120 0"
              stroke="white"
              strokeWidth="0.7"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-lines)" />
      </svg>
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 w-full">
        <div className="flex md:flex-nowrap flex-wrap w-full px-16 justify-center gap-5 text-white">
          <div className="flex flex-col p-6 min-w-[360px] bg-secondary">
            <h2 className="text-2xl font-bold mb-4">İletişim Bilgileri</h2>
            <hr className="border-red-600 mb-8" />
            <ul className="flex flex-col gap-6">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div
                    className="bg-red-600 p-3 rounded shadow-md 
            [mask-image:linear-gradient(80deg,transparent_0%,black,transparent_100%),linear-gradient(180deg,transparent_0%,black,transparent_100%)] 
            [mask-composite:intersect] flex items-center justify-center"
                  >
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-4 h-4 md:w-6 md:h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <iframe
            title="Google Map Location for Gym"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044.573473859746!2d28.82120280881901!3d41.00023511495174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9a174911d81%3A0xc5e560387a67233f!2sMert%20Korkmaz%20Studio!5e0!3m2!1str!2str!4v1755564649348!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            className="md:w-2/3 lg:w-2/4 min-w-[360px] min-h-[360px] border-none"
            style={{ filter: "grayscale(85%) brightness(60%)" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Footer;
