import React from 'react'
import "./Loan.css"

const Loan = () => {
  return (
    <>
    <section className='loan-sec'>
        <div className='loan-div-1'>
        <div className='loan-img'>
            <img style={{width:"108.9vh", height:"60vh"}}  src='./loan3.avif' alt='loan'/>
        </div>
        <div className='loan-info'>
            <h2 className='loan-heading'>Need a home loan? Get pre-approved</h2>
            <p className='loan-para-1'>Find a lender who can offer competitive mortgage rates and help you with pre-approval.</p>
            <button className='loan-btn'>Get pre-approved now</button>
            <p className='loan-link'>Advertising Disclosure</p>
        </div></div>
        <div className='loan-div-2'>
        <div className='loan-local-info'>
            <h2 className='loan-local-heading'>Get local info</h2>
            <p className='local'>Does it have pet-friendly rentals? How are the schools? Get important local information on the area you're most interested in.</p>
            <button className='loan-btnn'>Get pre-approved now</button>
            <p className='loan-linkk'>Advertising Disclosure</p>
        </div>
        <div className='loan-img'>
            <img style={{width:"100vh", height:"60vh", objectFit:"cover"}} src='./loan4.avif' alt='loan'/>
        </div>
        </div>

    </section>
    
    </>
  )
}

export default Loan