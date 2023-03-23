import React, { useEffect, useState,useContext } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import RigthBuyNow from "./RigthBuyNow";
import {ToastContainer,toast} from "react-toastify";
import { LoginContext } from "../../ContextProvider.js/ContextProvider";


const BuyNow = () => {
  const { account, setAccount } = useContext(LoginContext);
  const [cartData, setCartData] = useState();
  const [priced,setPriced]=useState(0);

  const byNowApi = async () => {
    const data = await fetch("http://localhost:6010/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data1 = await data.json();
    if (data.status !== 201) {
      console.log("error in buynow");
    } else {
      setCartData(data1.carts);
      console.log(data1.carts);
      console.log("i mam ");
    }
  };
  useEffect(() => {
    byNowApi();
  }, []);

  //subtital value change function
  
  const subTotal=()=>{
    let price=0;
   if(cartData){
    cartData.map((curelem)=>{
      price=curelem.price.cost+price;
    })
    setPriced(price);

   }
  }

  useEffect(()=>{
    subTotal();
  },[cartData]);

  //2:17

  //deleteapi

  const deleteApi=async(id)=>{
    try{

      const res=await fetch(`http://localhost:6010/remove/${id}`,{
        method:"DELETE",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const data1=await res.json();
      console.log("deletebtn");
      console.log(data1);

      if(res.status!==201){
        toast.error("something not right Try Again");
      }
      else{

        toast.success("deleted Sucessfuly");
        byNowApi();
        setAccount(data1)

      }
    
  

    }catch(error){
      console.log(error.message)
      console.log(id)
    }
   
  }

  return (
    cartData && (
      <section className="grid grid-cols-3 space-x-4 bg-purple-200 ml-[1%] mr-[1%] bg-opacity-30 mt-[2%] mb-[2%]">
        {/* left start */}
        <div className="px-4 md:col-span-2 col-span-3 ">
          <div className="flex flex-col justify-center items-start gap-2 mt-3  ">
            <div className="font-bold">Shopping Cart</div>
            <div className="text-blue-500">Select all items</div>
          </div>
          <div className="text-left ">
            <div className="text-right text-slate-900">Price</div>
            <hr className="w-full border-[1px] border-black" />
          </div>
          {cartData.map((curelem, index) => {
            return (
              <div className="flex justify-start items-center mt-4">
                <div className="ml-6">
                  <img
                    // src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70"
                    src={curelem.detailUrl}
                    alt="data"
                  />
                </div>
                <div className="ml-4 flex flex-col justify-center items-start gap-3 w-full">
                  <div className="flex justify-between w-[100%] items-center gap-4 ">
                    <div className="font-bold">{curelem.title.longTitle}</div>{" "}
                    <div className="flex justify-center items-center">
                      <div className="font-bold">
                        <BsCurrencyRupee />
                      </div>
                      <div className="font-bold">{curelem.price.cost}</div>
                    </div>
                  </div>
                  <div className="font-bold">{curelem.title.shortTitle}</div>
                  <div className="text-red-500">
                    Usually Dispatched in 8 Days
                  </div>
                  <div className="text-slate-900">
                    Eligible for free shipping
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <div className="bg-slate-900 rounded-md">
                      <select className="bg-slate-900 text-white rounded-md px-3 outline-none">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="text-blue-900 cursor-pointer active:text-blue-500" onClick={()=>deleteApi(curelem.id)}>
                      Delete
                    </div>
                    <div className="text-blue-900 cursor-pointer active:text-blue-500 md:block hidden">
                      Save or later
                    </div>
                    <div className="text-blue-900 cursor-pointer active:text-blue-500 md:block hidden">
                      See more like this
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* last sub total part start*/}
          <div className="flex md:justify-end justify-start items-center md:text-end text-center w-full">
            <span className="flex justify-center items-center md:text-[100%] text-[9px] font-bold">
              Subtotal ({cartData.length} items):{" "}
            </span>
            <span className="font-bold flex justify-center items-center">
              <BsCurrencyRupee /> {priced}.00
            </span>
          </div>
        </div>
        {/* last sub total part end*/}
        {/* left end */}
        <div className="flex justify-center items-start md:col-span-1 col-span-3">
          <RigthBuyNow cartData={cartData}/>
        </div>
        <ToastContainer />
      </section>
    )
  );
};

export default BuyNow;
