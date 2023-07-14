import React from 'react'
import Family from '../assets/family.jpeg'
import Family3 from '../assets/family3.jpeg'
import Family2 from '../assets/family2.jpeg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about_container'>
        <div className='about_main_container1'>
            <div className='about_img_container'>
                  <img src={Family} alt='fams' className='about_img1'/>
            </div>
            <div className='about_para'>
                  <p className='para'>The story starts with the founder Anjali. Based outside of Delhi she creates 
                    decorative functional objects for your home. 
                    Whilst studying Art and Design she discovered a passion for handmade objects. 
                    Inspired by surface design, shapes and colour emerged her homewares and 
                    furniture collection.
                    Made from Jesmonite her work is inspired by shape, form, pattern and colour
                    modernised with a contemporary twist to create endless colour ranges.</p>
            </div>
        </div>
        <div className='about_main_container2'>
            <div className='about_para'>
                  <p className='para1'>Dexxta Designs is a recognized designer and manufacturer of inspiring and 
                    sustainable materials and solutions for a wide range of architectural and 
                    design applications. Material design, prototyping, manufacturing, detailing, 
                    fabrication, packaging and shipping, all occur exclusively from our only 
                    location in Delhi, India.</p>
            </div>
            <div className='about_img1_container'>
                <img src={Family3} alt='fams' className='about_img2'/>
            </div>
            <div className='about_img2_container'>
                <img src={Family2} alt='fams' className='about_img3'/>
            </div>
        </div>
    </div>
  )
}

export default About