import React from "react";
import Navbar from "../../components/nav-bar";
import Slideshow from "../../components/slideshow";
import AboutOnCourt from "../../components/AboutOnCourt";
import Trainers from '../../components/trainers'
import OurClients from "../../components/ourClients";
import HomePageFooter from "../../components/homePageFooter";

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
