import React from "react";
import { useState } from "react";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    passwordAgain: "",
  });

  const onChangeDataHandler = (event) => {
    const { name, value } = event.target;
    setData((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };
  console.log(data);

  const submitform = async () => {
    const { name, email, mobile, password, passwordAgain } = data;
    const dataFromApi = await fetch("http://localhost:6010/userRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, mobile, password, passwordAgain }),
    });
    const res = await dataFromApi.json();
    console.log(dataFromApi.status);

    if (dataFromApi.status !== 201) {
      toast("invalid data");
    }
   
     else {
      setData({
        ...data,
        name: "",
        email: "",
        mobile: "",
        password: "",
        passwordAgain: "",
      });
      toast("Data is Store Succesfuly");
    }
  };

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="flex flex-col justify-center gap-2 items-center mt-4 ">
          <div className="font-bold text-[25px]">
            ShivCoder (Sachin Sangwan)
          </div>
          <div className="p-6 border-[1px] border-slate-900 flex flex-col gap-6 shadow-2xl  shadow-orange min-w-[30 0px] md:w-[40%] w-[90%]">
            <div className="font-bold">Create Account</div>
            <div className="flex flex-col justify-center items-start">
              <label className="font-bold">Your Name</label>
              <input
                name="name"
                type="text"
                value={data.name}
                required
                className="border-[1px] px-4 w-[100%] py-2 rounded border-black"
                onChange={onChangeDataHandler}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="font-bold">Email</label>
              <input
                name="email"
                type="email"
                value={data.email}
                required
                className="border-[1px] px-4 w-[100%] py-2 rounded border-black"
                onChange={onChangeDataHandler}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="font-bold">Mobile Number</label>
              <input
                name="mobile"
                type="text"
                value={data.mobile}
                required
                className="border-[1px] px-4 w-[100%] py-2 rounded border-black"
                onChange={onChangeDataHandler}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="font-bold">password</label>
              <input
                name="password"
                type="password"
                value={data.password}
                placeholder="atleast 6 charaters"
                required
                className="border-[1px] rounded px-4 w-[100%] py-2 border-black"
                onChange={onChangeDataHandler}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="font-bold">password again</label>
              <input
                name="passwordAgain"
                type="password"
                value={data.passwordAgain}
                required
                className="border-[1px] rounded px-4 w-[100%] py-2 border-black"
                onChange={onChangeDataHandler}
              />
            </div>
            <div className="flex justify-center items-center ">
              <button
                type="submit"
                className="p-4 px-16  bg-orange-500 text-white rounded active:bg-blue-500"
                onClick={submitform}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
