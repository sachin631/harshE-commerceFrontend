import React, { useEffect } from "react";
import Carouseld from "../caraousel/Carousel";
import MultiSlider from "./MultiSlider";
import { getProductData } from "../redux/action/Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

const AllMultiSlider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const { ProductData } = useSelector((state) => state.ProductData);
  console.log("from allRounder of slider", ProductData);

  return (
    <>
      {ProductData.message ? (
        <section>
          <div>
            <Carouseld />
            <MultiSlider
              title="Deal Of The Day"
              ProductData={ProductData.message}
            />
            <MultiSlider
              title="Today`s deal"
              ProductData={ProductData.message}
            />
            <h1 className="text-center text-2xl mt-4">Home furniture</h1>
            <figure className="mt-2 flex justify-center items-center">
              <img
                src="/images/furniture.jpg"
                alt="furniture"
                className=" mx-4 w-[95%] h-[30vh] md:h-[50vh] mb-2  "
              />
            </figure>
            <MultiSlider
              title="Best Seller"
              ProductData={ProductData.message}
            />
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center mt-8">
          <div className="flex justify-center flex-col gap-4 items-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
            <h1 className="text-red-500 rounded font-bold text-[40px]">Thoda sabar kro... lo...</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default AllMultiSlider;
