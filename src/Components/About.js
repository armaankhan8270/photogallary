import React from 'react'
import { Link } from "react-router-dom";
import "./About.css"


const About = () => {
  return (
    <div className="about1 ">
      <h1 className='display-1 text-center   fw-bolder'>About us</h1>
      {/* <h1 className='display-2 text-center text-primary fw-bolder ' > This is Our miniproject</h1> */}

      <div class="container1">
  {/* <div class="cards card0">
    <div class="border1">
      <h2>Al Pacino</h2>
      <h1>{}</h1>
     
    </div>
  </div> */}
  <div class="cards cards1">
    <div class="border1">
      <h2>Altamash</h2>
     
    </div>
  </div>
  <div class="cards cards2">
    <div class="border1">
      <h2 >Armaan Khan</h2>
     
    </div>
  </div>
</div>
    </div>
  )
}

export default About