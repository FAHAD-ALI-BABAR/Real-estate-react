import React from 'react'
import "./Cards.css"
const Cards = () => {
  return (
    <>
    <section className='cards-sec'>
        <div className='cards-head'>
            <h2 className='cards-h2'>See how Apartments.com can help you</h2>
        </div>
        <div className='cards-div'>
            <div className='cards-div1'>
                <img src='./cards1.webp' alt=''/>
                <h5 className='cards-name'>Buy a home</h5>
                <p className='cards-para'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                <button className='cards-btn'>Buy home</button>
            </div>
            <div className='cards-div2'>
                <img src='./cards2.webp' alt=''/>
                <h5 className='cards-name'>Sell a home</h5>
                <p className='cards-para'>With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.</p>
                <button className='cards-btn'>Sell home</button>
            </div>
            <div className='cards-div3'>
                <img src='./cards3.webp' alt=''/>
                <h5 className='cards-name'>Rent a home</h5>
                <p className='cards-para'>We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.</p>
                <button className='cards-btn'>Rent home</button>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Cards