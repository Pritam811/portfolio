import React from 'react'
import './form.css'

export const Form = () => {
  return (
    <div className="form-c">
       <form action="">
        <label>Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea name="" id="" rows='4' placeholder='Enter your text'></textarea>
        <button className='f-btn' >Send</button>
       </form>
    </div>
  )
}
