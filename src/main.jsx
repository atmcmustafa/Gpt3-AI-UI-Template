import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import WhatIsGPT from "./components/WhatIsGPT/WhatIsGPT";
import Future from "./components/Futures/Future";
import GetStarted from "./components/MyApps/GetStarted";
import GradientCard from "./components/Getstarted/GradientCard";
import Blogging from "./components/Blog/Blogging";
import FutureAcess from "./components/FutureAccess/FutureAcess";
import Footer from "./components/Footer/Footer";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Brands />
    <WhatIsGPT />
    <Future />
    <GetStarted />
    <GradientCard />
    <Blogging />
    <FutureAcess />
    <Footer />
  </React.StrictMode>
);
