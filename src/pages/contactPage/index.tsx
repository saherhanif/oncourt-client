import React from "react";
import Navbar from "../../components/nav-bar";
import "./contactUs.scss";
import ContactUsMainBody from "../../components/contactPageComponents/contactUsMainBody";
import Footer from "../../components/footer";
export default function Contact() {
  return (
    <div className="contantWrapper">
      <Navbar />
      <ContactUsMainBody />
      <Footer/>
    </div>
  );
}
