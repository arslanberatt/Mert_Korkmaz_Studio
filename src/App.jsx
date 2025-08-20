import styles from "./style";
import {
  Business,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <div
        style={{
          background: " linear-gradient(180deg, black 0%, #020301 100%)",
        }}
      >
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} text-white`}>
            <Hero />
          </div>
        </div>
        <div className="pb-64 md:pb-48">
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth} text-white`}>
              <Stats />
              <Business />
              <Gallery />
              <Testimonials />
              <Pricing />
            </div>
          </div>
          <Footer />
        </div>
        <div className="py-6 mt-4 md:mt-0 w-full flex justify-center text-white border-t border-grey-300/20 text-xs text-grey-100/80">
          © {new Date().getFullYear()}
          <span className="ml-1 hover:text-gray-500">
            <a href="http://arslanberatt.com/">Artyom</a>
          </span>{" "}
          , Tüm Haklar Saklıdır.
        </div>
      </div>
    </>
  );
};

export default App;
