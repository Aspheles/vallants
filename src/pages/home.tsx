import CarouselElement from "../components/carousel";
import FAQSection from "../components/faq";
import WhyChooseUs from "../components/whychooseus";
import WorkFlow from "../components/workflow";
import { FaArrowDown } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-screen h-[400px] flex flex-col items-center justify-center text-center"
        style={{
          background:
            "linear-gradient(106.34deg, #1D0D4C 11.78%, #2B0C5E 32.9%, #470981 55.58%, #A900FF 100%)",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Welcome to Vallants
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Creating your websites starts from small.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-800 transition flex items-center gap-2">
            Get Started{" "}
            <span>
              <FaArrowDown />
            </span>
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-800 transition flex items-center gap-2">
            Contact Us
            <span>
              <GrContact />
            </span>
          </button>
        </div>
      </section>

      <section className="py-12">
        <WhyChooseUs />
      </section>

      <section className="py-12">
        <div className="w-full h-[500px] bg-gradient-to-br from-[#1D0D4C] via-[#470981] to-[#A900FF]">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl text-center pt-8">
            Our Work
          </h1>
          <CarouselElement />
        </div>
      </section>

      <section className="py-12 ">
        <WorkFlow />
      </section>

      <section className="pt-12">
        <FAQSection />
      </section>
    </>
  );
};

export default Home;
