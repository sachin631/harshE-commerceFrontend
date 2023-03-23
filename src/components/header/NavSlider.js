import React, { useContext } from "react";
import Avatar from "react-avatar";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../../ContextProvider.js/ContextProvider";

const NavSlider = ({ showSlider,account }) => {
  const navigate = useNavigate();

  // const { account, setAccount } = useContext(LoginContext);

  // const logoutFn = async () => {
  //   const res2 = await fetch("http://localhost:6010/logout", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   });

  //   const data2 = await res2.json();
  //   if (res2.status !== 201) {
  //     alert("Something went Wrong");
  //   } else {
  //     alert("logout sucessfuly");
  //     setAccount(false);
  //     navigate("/");
  //   }
  // };
  return (
    <>
      <aside className="absolute animateSlider  z-10  text-black font-serif ">
        <section>
          <div className="bg-white flex justify-start items-center flex-col gap-4 py-4 px-4 h-[100%]">
            <div className="flex justify-between items-center gap-2">
              <figure className="md:hidden block">
                <Avatar
                  size="30"
                  facebook-id="invalidfacebookusername"
                  src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
                  className="rounded-full"
                />
              </figure>
              <div>Hello,{account.name}</div>
            </div>
            <NavLink to="/">
              <div>Home</div>
            </NavLink>
            <NavLink to="/buynow">
              <div>Your cart</div>
            </NavLink>
            {/* <div>Todays'Deal</div> */}
            <NavLink to="/signIn">
              <div>SignIn</div>
            </NavLink>
            {/* <div>Settings</div> */}
            <div className="flex justify-between items-center gap-2">
              <div>
                <MdOutlineLogout />
              </div>
              <div >Logout</div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default NavSlider;
