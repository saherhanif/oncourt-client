import React from "react";
import Navbar from "../../components/nav-bar";
import Slideshow from "../../components/slideshow";
import AboutOnCourt from "../../components/AboutOnCourt";
import Trainers from '../../components/trainers'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <AboutOnCourt />
      <Trainers />
    </div>
  );
}
