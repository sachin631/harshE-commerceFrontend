import React, { useEffect, useState } from "react";
import {BsCurrencyRupee} from "react-icons/bs"

const RigthBuyNow = ({cartData}) => {
const [priced,setPriced]=useState(0);
// subtotal part start
const subtotal=()=>{
  let price=0;
  if(cartData){
    cartData.map((curelem)=>{
      price=curelem.price.cost+price;
    })
    setPriced(price);
  }
}
useEffect(()=>{
  subtotal();
},[cartData]);
//subtotal part end 
  return (
    <>
      <section className="mt-3 flex flex-col justify-center items-start gap-3 bg-white mr-3 p-6">
        <div className="flex flex-col justify-center items-center">
          <span className="text-blue-500">
            Your Order is Eligible for Free Delivery .
          </span>
          <span className="text-slate-900">
            Select This Option at CheckOut. Details
          </span>
        </div>
        <div className="flex flex-col w-full gap-2" >
          <span className="font-bold flex justify-center items-center leading-6">Subtotal (1 Items) : <span><BsCurrencyRupee/></span>{priced}.00</span>
          <button className="px-8 py-2 bg-yellow-500 text-white rounded-md">Proceed to Buy</button>
        </div>
        <div className="w-full">
            <div>
                <select className="px-12 w-full py-2 outline-none bg-slate-400 rounded-md text-center">
                    <option>EMI available</option>
                </select>
            </div>
        </div>
      </section>
    </>
  );
};

export default RigthBuyNow;
//2;39;36
