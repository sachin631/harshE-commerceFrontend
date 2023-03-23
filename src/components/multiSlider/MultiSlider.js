import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { products } from "./productData";
import {RotatingLines} from "react-loader-spinner";

const MultiSlider = ({ title, ProductData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <section>
        <div className="mt-2">
          <h1 className="text-center mt- bg-[crimson] text-white container mx-auto flex justify-between px-2 items-center">
            <h1>{title}</h1>
            <button className="text-white bg-blue-500 hover:bg-blue-300 px-1 py-1 rounded-md">
              View All
            </button>
          </h1>
        </div>
        <div>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .900"
            transitionDuration={500}
            autoPlay={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="w-[100%] mt-8"
          >
            {ProductData ? (
              ProductData.map((curelem, index) => {
                return (
                  <div key={curelem._id}>
                    <NavLink to={`/cart/${curelem.id}`}>
                      <div className="flex flex-col justify-center items-center py-10 ">
                        <figure className="flex justify-center items-center">
                          <img
                            src={curelem.url}
                            alt={curelem._id}
                            className="h-[20vh]"
                          />
                        </figure>
                        <h4>{curelem.title.shortTitle}</h4>
                        <h4>{curelem.discount}</h4>
                        <h4>{curelem.tagline}</h4>
                      </div>
                    </NavLink>
                  </div>
                );
              })
            ) : (
              <div>
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
              </div>
            )}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default MultiSlider;
