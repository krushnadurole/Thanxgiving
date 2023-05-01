import React from 'react'
import './dashboard.css'
const Team = () => {
  return (
    <>
      <div className='whole'>
        <div className='title'>
          <h1 style={{ 'color': "black" }}>Welcome to Givers Application</h1>
        </div>
        <br></br>
        <hr></hr>
        <div>
          <h4>Description</h4>
          <p>
            Givers it is full stack web application develop for
            <br></br>
            the donation purpose. in which user can donate the things
            <br></br>
            to the system , so the someone who really needs that thing
            <br></br>
            will get.
            <br></br>
            in which so many things one can donate ex. clothes, laptos, mobiles , books.etc.
          </p>
        </div>

        <div className='team'>
          <h1>Team</h1>
          <ul>
            <li><h3>   Devika Warghane</h3></li>
            <li><h3>  Krushna Durole </h3></li>
            <li><h3> Atharava Dusane  </h3></li>
            <li><h3> Dyuti Bobby  </h3></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Team

