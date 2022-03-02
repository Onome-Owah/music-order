import React from 'react'
import music from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React project/src/images/icon-music.svg'
const Main = () => {
    let plan = 'Annual Plan'
  return (
    <div className='under'>
        <h2>Order Summary</h2>
        <p className='para'>You can now listen to millions of songs, audiobook and podcast on any device anywhere you like!</p>
            
        <div className='music'>
        <img src={music} alt="" />
            <div className='space'>
            <p>{plan}</p> 
            <p>$59.99/year</p>
            </div>
            <a className='change' href="">Change</a>
        </div>

        

        <button className='btn'>Proceed to Payment</button>

            
        <p className='Can'><a className='order' href="">Cancel Order</a></p>
    </div>
    
  )
}

export default Main