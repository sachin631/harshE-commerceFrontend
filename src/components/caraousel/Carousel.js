import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carouseld = () => {
  return (
    <>
      <section>
        <div>
          <Carousel
            infiniteLoop={true}
            autoFocus={true}
            stopOnHover={true}
            autoPlay={true}
            emulateTouch={true}
            showArrows={true}
            useKeyboardArrows={true}
            showThumbs={false}
            className="w-[100%] h-[%]"
          >
            <div>
              <img
                src="images/laptop1.jpg"
                alt="data"
                className="w-[100vw] h-[50vh]"
              />
            </div>
            <div>
              <img
                src="images/laptop2.jpg"
                alt="data"
                className="w-[100vw] h-[50vh]"
              />
            </div>
            <div>
              <img
                src="images/laptop3.jpg"
                alt="data"
                className="w-[100vw] h-[50vh]"
              />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Carouseld;
