import React from 'react'
import { Link } from 'react-router-dom'
import CardNumber1 from '../components/CardNumber1'


function Accessories() {
  return (
    <div>
      
       <ul>
          <li>
            <Link to="/description1"/>
          </li>
        </ul>
      <CardNumber1/>
    </div>
    
  )
}

export default Accessories