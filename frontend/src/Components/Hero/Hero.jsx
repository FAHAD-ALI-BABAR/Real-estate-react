import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <>
    <section className='hero-section'>
        
            <div className='hero-content'>
            
                <div className='hero-heading'>
                    <h1>Find Homes That Suit Your Style</h1>
                    <div className='hero-ball'/>
                </div>
                <div className='hero-description'>
                    <span>Discover unique and high-end properties that are available exclusively on our platform. </span>
                    <span>Unlock access to the finest homes on the market.
                    </span>
                </div>
                <div className='hero-search-bar'>
                <HiLocationMarker color='blue' width='20'/>
                <input type='text'/>
                <button className='search-btn'>Search</button>
                </div>

                <div className='hero-stats'>
                <div className='premium-products'>
                    <span>
                    <CountUp start={5500} end={9000} duration={3}/>
                    <span className='sign'>+</span>
                    </span>
                    <h4>Premium Products</h4>
                </div>
                <div className='premium-products'>
                    <span>
                    <CountUp start={200} end={2500} duration={3}/>
                    <span className='sign'>+</span>
                    </span>
                    <h4>Happy Customer</h4>
                </div>
                <div className='premium-products'>
                    <span>
                    <CountUp start={0} end={45} duration={3}/>
                    <span className='sign'>+</span>
                    </span>
                    <h4>Award Winning</h4>
                </div>
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