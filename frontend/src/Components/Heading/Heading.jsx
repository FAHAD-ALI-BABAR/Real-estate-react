import React from 'react'
import './Heading.css'

const Heading = () => {
  return (
    <>
    <div className='heading'>
        <img className='vet-img' src='Veterans-United_logo_white_long.png' alt='veterans logo'/>
        <span className='vet-availability'>Veterans: Check VA Rates & Eligibility</span>
        <span className='btn-vet'><button className='vet-btn'>Find Your Rates</button></span>
        <span className='paid-advertisement'>Paid advertisement. NMLS #1907. Not a govt agency
        RealCostTM Tools</span>
    </div>


    </>
  )
}

export default Heading