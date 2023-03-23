import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BuyNow from "./components/BuyNow/BuyNow";
import Cart from "./components/Cart/Cart";
// import Carouseld from "./components/caraousel/Carousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AllMultiSlider from "./components/multiSlider/AllMultiSlider";
import SignIN from "./components/signIN_out/SignIN";
import SignUp from "./components/signIN_out/SignUp";
import ContextProvider from "./ContextProvider.js/ContextProvider";

function App(store) {
  console.log(store);
  return (
    <div className="App ">
      <ContextProvider>
        <BrowserRouter>
       
          <Header />
          <Routes>
            <Route path="/" element={<AllMultiSlider />} />
            <Route path="/signin" element={<SignIN />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/buynow" element={<BuyNow />} />
          </Routes>
          <Footer className="" />
        
        </BrowserRouter>
        </ContextProvider>
     
    </div>
  );
}

export default App;
