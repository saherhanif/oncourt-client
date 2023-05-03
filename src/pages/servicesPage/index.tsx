import React from "react";
import Navbar from "../../components/nav-bar";
import MainServices from "../../components/servicesComponents/mainServices";
import ServicesHeader from "../../components/servicesComponents/servicesHeader";
import Footer from "../../components/footer";
export default function Services() {
  return (
    <div>
      <Navbar />
      <ServicesHeader/>
      <MainServices/>
      <Footer/>
    </div>
  );
}
