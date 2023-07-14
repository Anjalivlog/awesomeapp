import React from 'react'
import CardItems from './CardItems'
import '../styles/CardNumber.css'

function CardNumber1 () {
   const lists=[
    {
      id:'e1',
      image:'./images/1_2.jpg',
      text:'Spatter Lamp',
      path:'/description1',
    },
    { id:'e2',
      image:'./images/1_3.jpg',
      text:'Blue and White Lamp',
      path:'/description1',
    },
    {
      id:'e3',
      image:'./images/4_1.jpg',
      text:'Spotted Lamp',
      path:'/description1',
    },
    {
      id:'e4',
      image:'./images/3_3.png',
      text:'Spotted Lamp',
      path:'/description1',
    },  
    {
      id:'e5',
      image:'./images/2.jpg',
      text:'Spotted Lamp',
      path:'/description1',
    },  
    {
      id:'e6',
      image:'./images/3.jpg',
      text:'Spotted Lamp',
      path:'/description1',
    },
    {
      id:'e7',
      image:'./images/4.jpg',
      text:'Spotted Lamp',
      path:'/description1',
    }, 
    {   
    id:'e8',
    image:'./images/5.jpg',
    text:'Spotted Lamp',
    path:'/description1',
    },
    {   
    id:'e9',
    image:'./images/Terracotta+Soap+Dish.jpg',
    text:'Spotted Lamp',
    path:'/description1',
    },      
    {   
    id:'e10',
    image:'./images/Sherbet+Pink+Soap+Dish.jpg',
    text:'Spotted Lamp',
    path:'/description1',
    },
    {   
    id:'e11',
    image:'./images/classic+mirrors.jpg',
    text:'Spotted Lamp',
    path:'/description1',
    },      
    {   
    id:'e12',
    image:'./images/navy+mirror+pair.jpg',
    text:'Spotted Lamp',
    path:'/description1',
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
      <CardItems
        image={lists[8].image}
        text={lists[8].text}
        path={lists[8].path}>
      </CardItems>
      <CardItems
        image={lists[9].image}
        text={lists[9].text}
        path={lists[9].path}>
      </CardItems>
      <CardItems
        image={lists[10].image}
        text={lists[10].text}
        path={lists[10].path}>
      </CardItems>
      <CardItems
        image={lists[11].image}
        text={lists[11].text}
        path={lists[11].path}>
      </CardItems>
    </div>  
  )
}

export default CardNumber1