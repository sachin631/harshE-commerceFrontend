import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../ContextProvider.js/ContextProvider";

const SignIN = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { account, setAccount } = useContext(LoginContext);
  const navigate=useNavigate();
  const dataHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("signindata", data);
  // fetching login api
  const continueButton = async () => {
    const { email, password } = data;
    let dataOfApi = await fetch("http://localhost:6010/login", {
      method: "POST",
     

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    let res = await dataOfApi.json();
    console.log(dataOfApi.status);
    if(dataOfApi.status !== 200){
      toast.error("Please Enter Valid Details");
    }
    else{
      setAccount(res);
      toast.success("Login Successfuly");
      
      navigate("/");
    }
  };
  // fetching login api end

  return (
    <>
      <section>
        <div className="flex flex-col justify-center gap-2 items-center mt-4 ">
          <div className="font-bold text-[25px]">
            ShivCoder (Sachin Sangwan)
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="p-6 border-[1px] border-slate-900 flex flex-col gap-6 shadow-2xl  shadow-orange min-w-[300px] w-[30%]">
              <div className="font-bold">Sign-IN</div>
              <div className="flex flex-col justify-center items-start">
                <label className="font-bold">Email</label>
                <input
                  name="email"
                  // value={data.email}
                  type="email"
                  required
                  className="border-[1px] px-4 w-[100%] py-2 rounded border-black"
                  onChange={dataHandler}
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <label className="font-bold">password</label>
                <input
                  name="password"
                  // value={data.password}
                  type="password"
                  placeholder="atleast 6 charaters"
                  required
                  className="border-[1px] rounded px-4 w-[100%] py-2 border-black"
                  onChange={dataHandler}
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="p-4 px-16  bg-orange-500 text-white rounded active:bg-blue-500"
                  type="submit"
                  onClick={continueButton}
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
          <div className="mt-2 flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center active:text-blue-500 cursor-pointer">
              <NavLink to="/signup">
                <h1>New To ShivCoder ?</h1>
              </NavLink>
            </div>
            <NavLink to="/signup">
              <button className="bg-slate-900 text-white rounded p-2 py-3 px-5 active:bg-blue-500">
                Create Your ShivCoder Account
              </button>
            </NavLink>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default SignIN;
