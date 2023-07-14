import React from 'react'
import CardItems from './CardItems'
import '../styles/CardNumber.css'

function CardNumber() {
   const lists=[
    {
      id:'e1',
      image:'./images/lamp1.jpeg',
      text:'Spatter Lamp',
      path:'/description',
    },
    { id:'e2',
      image:'./images/lamp2.jpeg',
      text:'Blue and White Lamp',
      path:'/description',
    },
    {
      id:'e3',
      image:'./images/lamp3.jpeg',
      text:'Spotted Lamp',
      path:'/description',
    },
    {
      id:'e4',
      image:'./images/lamp4.jpeg',
      text:'Spotted Lamp',
      path:'/description',
    },  
    {
      id:'e5',
      image:'./images/lamp5.jpeg',
      text:'Spotted Lamp',
      path:'/description',
    },  
    {
      id:'e6',
      image:'./images/pandentlamp.jpeg',
      text:'Spotted Lamp',
      path:'/description',
    },
    {
      id:'e7',
      image:'./images/light.jpeg',
      text:'Spotted Lamp',
      path:'/description',
    },    
    {
      id:'e8',
      image:'./images/pandentlamp2.jpeg',
      text:'Spotted Lamp',
      path:'/description',
    },        
   ];

  return (
    <div className='allcards'>
      <CardItems
        image={lists[0].image}
        text={lists[0].text}
        path={lists[0].path}>
      </CardItems>
      <CardItems
        image={lists[1].image}
        text={lists[1].text}
        path={lists[1].path}>
      </CardItems>
      <CardItems
        image={lists[2].image}
        text={lists[2].text}
        path={lists[2].path}>
      </CardItems>
      <CardItems
        image={lists[3].image}
        text={lists[3].text}
        path={lists[3].path}>
      </CardItems>
      <CardItems
        image={lists[4].image}
        text={lists[4].text}
        path={lists[4].path}>
      </CardItems>
      <CardItems
        image={lists[5].image}
        text={lists[5].text}
        path={lists[5].path}>
      </CardItems>
      <CardItems
        image={lists[6].image}
        text={lists[6].text}
        path={lists[6].path}>
      </CardItems>
      <CardItems
        image={lists[7].image}
        text={lists[7].text}
        path={lists[7].path}>
      </CardItems>
    </div>  
  )
}

export default CardNumber