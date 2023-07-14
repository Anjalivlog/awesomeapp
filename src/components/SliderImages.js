import React, {useState} from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const SliderImages = ({slides}) => {
     
    const [currentPic, setCurrentPic] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrentPic(currentPic === length - 1 ? 0 : currentPic + 1);
    };

    const prevSlide = () => {
        setCurrentPic(currentPic === 0 ? length - 1 : currentPic - 1);
    };

    

    // if (!Array.isArray(slides) || slides.length <= 0) {
    //   return null;
    // }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left_arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='right_arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index ===currentPic ? 'slide active' : 'slide'} key = {index}>
          {index === currentPic && (<img src={slide.image} alt='product' className='image'/> 
          )}
          </div>
        )
      }
      )}
    </section>
  )
}
