import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "react-avatar";
import NavSlider from "./NavSlider";
import { useState, useEffect, useRef } from "react";
import "./header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../../ContextProvider.js/ContextProvider";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const { account, setAccount } = useContext(LoginContext);
  const [showSlider, setShowSlider] = useState(false);

  const ref = useRef();
  const navigate = useNavigate();
 

  useEffect(() => {
    
    const handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setShowSlider(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  //logout api

  const logOutFn = async () => {
    const res2 = await fetch("http://localhost:6010/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data2 = await res2.json();
    if (res2.status !== 201) {
      alert("Something went Wrong");
    } else {
      alert("logout sucessfuly");
      setAccount(false);
      navigate("/");
    }
  };

 

  //getvaliduserapi
  const getValidUserApi=async()=>{
    try{

      const res=await fetch("http://localhost:6010/validuser",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const data1=await res.json();
    console.log("sachin");
    console.log(data1);

    setAccount(data1);

    }catch(error){
      console.log(error)
    }
    
  }

  useEffect(()=>{
    getValidUserApi();
  },[])

  return (
    <>
      <div>
        <section className="bg-slate-900 text-white px-10 py-4">
          <nav className="flex justify-between items-center">
            {/* humburger mobile view*/}
            <div className="md:hidden block">
              <figure
                className=""
                onClick={() => {
                  setShowSlider(!showSlider);
                }}
              >
                <AiOutlineMenu />
              </figure>
            </div>
            {/* humburger mobile view end*/}
            <NavLink to="/">
              <div className="text-center cursor-pointer">
                {account.carts ? (
                  <h1>Welcome {account.name}</h1>
                ) : (
                  <h1>HomePage</h1>
                )}
              </div>
            </NavLink>
            <div className="md:block hidden">
              <div className="flex justify-center items-center ">
                <div>
                  <input
                    type="text"
                    placeholder="search items"
                    className="outline-none px-4 py-1 w-[30vw] rounded-l text-black"
                  />
                </div>
                <figure className="bg-blue-500 w-full h-full py-2 rounded-r px-2">
                  <FcSearch className="" />
                </figure>
              </div>
            </div>
           <NavLink to="signin">
              {" "}
              <h1 className="md:block hidden active:text-blue-500 hover:text-slate-500 cursor-pointer">
                SignIn
              </h1>
            </NavLink>
         <button className="active:text-blue-500" onClick={logOutFn}>Logout</button> 
            <div className="">
              <div className="bg-red-500 w-6 h-6 rounded-full text-center flex justify-center items-center ml-2 text-white">
                {account.carts ? <h1>{account.carts.length}</h1> : <h1>0</h1>}
              </div>
              <figure
                onClick={() => {
                  if (account.carts) {
                    navigate("/buynow");
                  } else {
                    toast.error("Please Login First");
                  }
                }}
              >
                <AiOutlineShoppingCart />
              </figure>
            </div>
            {account.carts ? (
              <div>
                <figure className="md:block hidden bg-blue-500 text-white w-6 h-6 rounded-full text-center px-auto py-auto">
                  <div  className="rounded-full">
                    {account.name[0].toUpperCase()}
                  </div>
                </figure>
              </div>
            ) : (
              <figure className="md:block hidden">
                <Avatar
                  size="30"
                  facebook-id="invalidfacebookusername"
                  src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
                  className="rounded-full"
                />
              </figure>
            )}
          </nav>
        </section>
        <div
          className={`${
            showSlider ? "md:hidden block w-[50%] relative " : "hidden"
          }`}
          ref={ref}
        >
          <NavSlider showSlider={showSlider} account={account}/>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Header;

//avtart
