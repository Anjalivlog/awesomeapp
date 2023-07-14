import React, { useState } from 'react'
import '../styles/BottonSection.css'


function BottomSection() {
  const [inputEmail, setInputEmail] = useState("");
   
   
  function handlerEmailInput(event) {
    setInputEmail(event.target.value)
  }

  const submitForm = (event) => {
    event.preventDefault();
  
  }
  
  return (
   <div>
    <div className='bottom'>
     <div className='bottom-section'>
       <h1 className='bottom-heading'>Join our Newsletter</h1>
       <p className='bottom-paragraph'>Get notified about product launches and receive exclusive offers and discounts by 
       joining our email list.</p>
     </div>
     <div className='submit-main'>
     <form onSubmit={submitForm} className='submit-sub-main'>
      <div className='input-main'>
       <input className='input-one'
        type='text' 
        name='email' 
        id='email' 
        autoComplete='off' 
        placeholder='Email Address' 
        value={inputEmail}
        onChange={handlerEmailInput}/>
       <input className='input-two' type='submit' value='Join'/>
     </div> 
     </form>
     </div>
   </div>
   </div>
  )
}

export default BottomSection