import { Button, Carousel } from "antd";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const CarouselElement = () => {
  const RightArrow = () => {
    return <Button icon={<FaChevronRight size={50} />} size="middle"></Button>;
  };

  const LeftArrow = () => {
    return <Button icon={<FaChevronLeft />} size="middle" />;
  };

  return (
    <div className="mt-10 mb-12 relative">
      <Carousel
        prevArrow={LeftArrow()}
        nextArrow={RightArrow()}
        draggable={true}
        swipe={true}
        arrows={true}
        infinite={false}
      >
        {/* Slide 1 */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            <img className="w-[500px] " src="./moonlight.png" alt="Moonlight" />
            <img
              className="w-[500px]  duration-300"
              src="./moonlight.png"
              alt="Moonlight"
            />
            <img
              className="w-[500px]  duration-300"
              src="./moonlight.png"
              alt="Moonlight"
            />
          </div>
        </div>
        {/* Slide 2 */}
        <div className="h-[200px] flex items-center justify-center">
          <p className="text-white text-lg md:text-xl font-medium">
            Slide 2 Content
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselElement;
