import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <section className='hero-section'>
        
            <div className='hero-content'>
                <div className='hero-ball'/>
                <div className='hero-heading'>
                    <h1>Find Homes That Suit Your Style</h1>
                </div>
                <div className='hero-description'>
                    <span>Discover unique and high-end properties that are available exclusively on our platform. </span>
                    <span>Unlock access to the finest homes on the market.
                    </span>
                </div>
                <div className='hero-search-bar'>
                <input type="search" id="search" placeholder="Search..."/>
                <button type="submit"><img src="./icons8-search-30.png" alt="Search" /></button>
                </div>
                
                
            </div>
            <div className='hero-img'>
                <img src='./house.jpeg' alt='apartment'/>
                <img src='./living-room.jpeg' alt='living-room'/>
                <img src='./living-room1.webp' alt='livingroom'/>
                <img src='./living-room2.jpeg' alt='living-room'/>

            </div>
        
    </section>
    
    
    </>
  )
}

export default Hero