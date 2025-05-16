import React from 'react'
import Sanket from '../assets/Sanket.jpg'
import './about.css';

export const AboutMe = (props) => {
    console.log(props);
    
  return (
    <>
    <div className='Card'>
    <h1 id='Name'>Hello My Name is {props.name}</h1>
    <img src={Sanket} alt="Image" id='img' />
    <h3>My Favorite Food is <span id='food'>{props.favFood}</span></h3>
    </div>
    </>
  )
}
