import React from 'react'
import './trainerStyle.scss'
import StyledLine from '../StyledLine'
import trainerImg1 from './images/trainer1.PNG'
import ArrowButton from '../../components/ArrowButton'

export default function Trainers() {
  return (
    <div className='trainerContainer'>
      <div className='titleContainer'>
      <h1>
         על
      <span>
      {"  "}
      הקבוצה שלנו     
      </span>
      </h1>
      <StyledLine/><br></br></div>
      <div className='trainerCard'>
        <div className='trainerInfo'>
          <h2>המאמן בדיע</h2>
         <span> <p>שחקן מקצועי ומעל 5 שנים ניסיון בהוראה</p> </span>
         <ArrowButton/>
        </div>
        <div className='trainerImg'>
          <img src={trainerImg1} alt='trainer'/>
        </div>
      </div>
      <div className='trainerCard'>
        <div className='trainerInfo'>
          <h2>המאמן בדיע</h2>
         <span> <p>שחקן מקצועי ומעל 5 שנים ניסיון בהוראה</p> </span>
         <ArrowButton/>
        </div>
        <div className='trainerImg'>
          <img src={trainerImg1} alt='trainer'/>
        </div>
      </div>

    </div>
  )
}
