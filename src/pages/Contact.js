import React from 'react'
import { BsPhone,BsMailbox, } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa'
import '../styles/Contact.css'
 
const Contact = () => {
    const mailId = 'yadavanjali14041998@gmail.com';  
    

  return (
    <div className='contact_container'>
        <div className='contact_main_container'>
            <div className='contact_sub_main_container'>
                    <div className='contact1'>
                      <span className='contact_main_heading'><h1>Get in touch..</h1></span>
                      <p className='contact_heading1'>For pricing enquiries or further information regarding 
                      any of our products, please contact us on the following details or use the contact 
                      form below:
                      </p>
                    </div>
            </div>
            <div className='contact_details'>
              <div className='contact2'>
                <div className='contact_address'>
                    <h1 className='contact_heading2'>Workshop:</h1>
                    <div className='contact_location_icon'><FaLocationArrow className='location_icon'/>
                    <p className='contact_para'>Delhi , India</p></div>
                </div>
                <div className='contact_phone'>
                    <div className='contact_location_icon'><BsPhone className='phone_number'/>
                    <p className='phone'>91-9873826753</p></div>
                </div>
                <div className='contact_mail'>
                    <div className='contact_location_icon'><BsMailbox className='mail_send'/>
                    <a href={`mailto:${mailId}`} className='mail'>yadavanjali14041998@gmail.com</a></div>
                </div>
              </div>    
            </div>
        </div>
    </div>
  )
}


export default Contact