import React from 'react'
import { SliderImages } from '../components/SliderImages'
import { SliderData } from '../components/SliderData'
import '../styles/Slider.css'
import { TableDetails } from '../components/TableDetails'


const DescriptionPage = () => {
  return (
    <div>
        <div className='description_container'>
            <div className='description_content'>
                <div className='description_slider'>
                   <SliderImages slides={SliderData}/>
                </div>
                   <div className='description_text'>
                            <div className='description_heading'>
                               <h6 className='heading'>Elm & Turquoise Acrylic</h6>
                                <h5 className='price'>£1,245.00</h5>
                            </div>
                            <div className='description_para'>
                               <p>Made from sustainably sourced English elm and clear turquoise acrylic. 
                                  Each lamp base is hand polished to perfection revealing a sleek, glassy
                                  acrylic finish running seamlessly into the organic texture of the wood grain.
                                  The twisted silk flex extends from the neck of the lamp, as shown in the
                                  gallery image. The lampshade is available to purchase separately in a 
                                  cream or natural linen. All Iluka London pieces are one-of-a-kind items 
                                  that are naturally unique and therefore cannot be reproduced.
                                </p>
                            </div>
                            <button className='buy_btn'>Buy Now </button>
                   </div>
            </div>
            <div className='tables'>
              <span className='information'><h>Additional Information</h></span>
              <TableDetails/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default DescriptionPage