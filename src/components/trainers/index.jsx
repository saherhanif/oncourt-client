import React from 'react'
import './trainerStyle.css'
import StyledLine from '../StyledLine'
import trainerImg1 from './images/trainer1.PNG'

export default function Trainers() {
  return (
    <div className='trainerContainer'>
      <h1>
         על
      <span>
      {"  "}
      הקבוצה שלנו     
      </span>
      </h1>
      <StyledLine/><br></br>
      <div className='trainerCard'>
        <div className='trainerInfo'>
          <h2>המאמן בדיע</h2>
          <h2>שחקן מקצועי ומעל 5 שנים ניסיון בהוראה</h2>
        </div>
        <div className='trainerImg'>
          {/* <img src={trainerImg1} alt='trainer'/> */}
        </div>
      </div>

    </div>
  )
}
