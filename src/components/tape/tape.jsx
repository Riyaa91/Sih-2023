import React from 'react'
import './tape.css';
import { NavLink } from 'react-router-dom';
function Tape(){
  return (
    <div>
        <NavLink to="/login" className='tape anchortag'>
                Post Your Case
        </NavLink>
    </div>
  )
}

export default Tape