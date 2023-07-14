import React from 'react'
import { Link } from 'react-router-dom'
import Light from '../assets/light.jpeg'
import Furni from '../assets/Terracottatable.jpg'
import Access from '../assets/SoapDishes.jpg'
import '../styles/Cards.css'

function Cards() {
  return (
    <>
    <h1 className='cards-content' style={{ fontWeight: 1000 }}>BROWSE PRODUCTS</h1>
    <div className='cards'>
        <div   className="background-image" style={{ backgroundImage: `url(${Light})` }}>
        <Link to='/lightning' className='card_link' style={{ fontWeight: 500 }}>Lightning</Link>
        </div>
        <div className="background-image" style={{ backgroundImage: `url(${Furni})`  }}>
        <Link to='/furniture' className='card_link'>Furniture</Link>
        </div>
        <div className="background-image" style={{ backgroundImage: `url(${Access})` }}>
        <Link to='/accessories' className='card_link'>Accessories</Link>
        </div>      
    </div>
    </>
  )
}

export default Cards