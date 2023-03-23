import React, { useContext, useEffect, useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { LoginContext } from "../../ContextProvider.js/ContextProvider";

const Cart = () => {
  const { account, setAccount } = useContext(LoginContext);

  const { id } = useParams();
  console.log(id);

  const [indData, setIndividualProductData] = useState([]);
  const getIndivisualData = async () => {
    const data = await fetch(`http://localhost:6010/getParticular/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();

    if (data.status !== 201) {
      console.log("no data found", res);
    } else {
      console.log("individual data is found properly", res);
      setIndividualProductData(res);
    }
  };

  useEffect(() => {
    getIndivisualData();
  }, [id]);

  console.log("final", indData);

  //addtocart functionality
  const addToCart = async (id) => {
    try {
      const cartData = await fetch(`http://localhost:6010/addToCart/${id}`, {
        method: "Post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ indData }),
        credentials: "include",
      });

      const data1 = await cartData.json();
      console.log(data1);
      setAccount(data1);
      if (data1) {
        toast.success(`${data1.name}Your Data is added successfuly to Cart`);
        toast.success(`${data1.name}Your Cart lenght is ${data1.carts.length}`);
      } else {
        alert("please Login To Add Data To the Cart");
      }
    } catch (error) {
      toast.error("error in cart.js", error.message);
    }
  };

  return (
    <>
      {indData.message ? (
        <section className="flex justify-center items-center mt-[5%] w-full h-full ">
          <div className="flex md:flex-row flex-col  justify-center items-center gap-[8%] ">
            <div className="flex flex-col justify-center items-center gap-6 w-[20.5%">
              <div className="w-[100%]">
                <img
                  // src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70"
                  src={indData.message.detailUrl}
                  alt="data"
                  className="w-[100%]"
                />
              </div>
              <div className="flex justify-between items-center w-[100%] gap-[8%] mb-3">
                <button
                  className="p-3 bg-yellow-500 text-white rounded-md active:bg-blue-500"
                  onClick={() => addToCart(indData.message.id)}
                >
                  ADD To Cart
                </button>
                <NavLink to="/buynow">
                  <button className="p-3 bg-orange-500 text-white rounded-md active:bg-blue-500">
                    Buy Now
                  </button>
                </NavLink>
              </div>
            </div>
            {/* right section start */}

            <section className="border-black border-[1px] border-solid md:w-[40%] w-[90%] mb-5 rounded-md">
              <div className="flex flex-col gap-4 justify-center items-start">
                <div className="border-b-[1px] border-black border-solid w-[100%] px-4 py-4">
                  <h1 className="font-bold">
               
                    {indData.message.title.shortTitle}
                  </h1>
                  <h1 className="font-bold">
                    {indData.message.title.longTitle}
                  </h1>
                </div>
                <div className="px-4 ">
                  <h1 className="flex justify-start items-center gap-1">
                    <span className="text-slate-500">MRP :</span>{" "}
                    <BsCurrencyRupee />{" "}
                    <span className="line-through">
                      {indData.message.price.mrp}
                    </span>
                  </h1>
                  <div className="flex justify-start items-center gap-1">
                    <span className="text-slate-500"> Deal of The Day: </span>
                    <BsCurrencyRupee />{" "}
                    <span className="text-red-500">
                      {indData.message.price.cost}
                    </span>
                  </div>
                  <div className="flex justify-start items-center gap-1">
                    <span className="text-slate-500">You Save :</span>{" "}
                    <BsCurrencyRupee />{" "}
                    <span className="text-red-500">
                      {" "}
                      {indData.message.price.mrp -
                        indData.message.price.cost}{" "}
                      (47%)
                    </span>
                  </div>
                  <div className="flex justify-start items-center gap-1">
                    <span className="text-red-500">Discount :</span>{" "}
                    <span className="font-bold">
                      Extra {indData.message.price.discount} Off
                    </span>
                  </div>
                  <div className="flex justify-start items-center gap-1">
                    <span className="text-blue-500">Free Delivery:</span>{" "}
                    <span className="font-bold"> Oct 8-21</span>{" "}
                    <span className="text-blue-500">Details</span>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <div className="text-slate-500">
                    Fast Delivery:
                    <span className="font-bold">Tommorow 11 AM</span>
                  </div>
                  <div className="">
                    <span className="font-bold">About The Teams :</span>{" "}
                    <span>{indData.message.description}</span>
                  </div>
                </div>
              </div>
            </section>
            {/* right section end */}
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
            <h1 className="text-red-500 rounded font-bold text-[40px]">
              Thoda sabar kro... lo...
            </h1>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};
export default Cart;

// https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70
