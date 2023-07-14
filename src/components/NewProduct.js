import React from 'react'
//import { Link } from 'react-router-dom'
import NewPic from '../assets/newproduct.jpeg'
import '../styles/NewProduct.css'


function NewProduct() {
    
    // const [samePage, showSamePage] = useState(false);

    // const showLightningHandler = () => {
    //     showSamePage(true)
    // }
    
  return (
    <div className='main-container'>
        <div className='heading'>
            <h3 className='main-heading'>NEW PRODUCT</h3>
            <h4 className='sub-main-heading'>The Lighting Dining Table</h4>
            <p className='paragraph'>It has been 5 years since the inception of Iluka London and what a better way 
               to celebrate than with the launch of our very first dining chair. We have 
               designed the frame to echo the the bases of our signature dining tables and 
               is available in a wide range of bespoke finishes and fabric options.
            </p>
        </div>
         {/* <div className='picture' onClick={showLightningHandler}>
          {samePage ? (<Link to='/funiture'>
           <img src={NewPic} alt='newpic'  />  
           </Link>) : <img src={NewPic} alt='newpic' />}
        </div> */}
        <div className='newpicture'>
          <a href='/lightning'><img src={NewPic} alt='newpic' className='picture'></img></a>
        </div>
    </div>
  )
}

export default NewProduct
