import React from 'react'
import { Link } from 'react-router-dom'


function CardItems(props) {
  return (
    <>  
       <div className='cards'>
          <div className='card'>
          <Link className='cards_item_link' to={props.path}>
                 <img src={props.image} alt='cardsitem' className='card_img' />
             <div className='card_info'>
                 <h5 className='card_text'>{props.text}</h5>
             </div>
          </Link>
          </div>
       </div> 
    </>
  )
}

export default CardItems