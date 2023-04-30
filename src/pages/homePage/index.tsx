import React from "react";
import Navbar from "../../components/nav-bar";
import Slideshow from "../../components/homePageComponents/slideshow";
import AboutOnCourt from "../../components/homePageComponents/AboutOnCourt";
import Trainers from "../../components/homePageComponents/trainers";
import OurClients from "../../components/homePageComponents/ourClients";
import HomePageFooter from "../../components/homePageComponents/homePageFooter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <AboutOnCourt />
      <Trainers />
      <OurClients />
      <HomePageFooter />
    </div>
  );
}
