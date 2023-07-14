import React from 'react'
import CardNumber from '../components/CardNumber'
import { Link } from 'react-router-dom'


function Lightning() {
  return (
    <div>
       <ul>
          <li>
            <Link to="/description"/>
          </li>
        </ul>
      <CardNumber/>
    </div>
  )
}

export default Lightning