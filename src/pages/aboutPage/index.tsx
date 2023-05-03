import React from 'react'
import Navbar from "../../components/nav-bar";
import TrainersToggle from "../../components/aboutPageComponents/trainerToggle"
import Footer from '../../components/footer';
import './aboutPageStyle.scss'
export default function About() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <TrainersToggle/>
      <Footer/>
    </div>
  )
}