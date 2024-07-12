import React from 'react'
import { FaCalculator } from "react-icons/fa6";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GiBuyCard } from "react-icons/gi";
import './Calculation.css';

const Calculation = () => {
  return (
    <>
    <div className='cal-div'>
        <div className='calculation-heading'>
            <span className='red'>Real</span>Cost

            <sup className='trademark'>TM</sup>
                <span className='tools'>Tools</span>
        </div>
        <div className='cal-gallery'>
            <div className='morgage-calc'>
                <div className='img-calc'>
                <FaCalculator  className='custom-icon' />

                </div>
                <div className='text-calc'>
                    <h2 className='calc-heading'>Mortgage Calculator</h2>
                    <span className='calc-info'>Calculate your monthly mortage payments.</span>
                </div>
            </div>
            <div className='affordability-calc'>
            <div className='img-calc'>
            <FaMoneyCheckDollar className='custom-icon rent' />
            
            </div>
            <div className='text-calc'><h2 className='calc-heading'>Affordability Calculator</h2>
            <span className='calc-info'>Calculate the price of home you can calculate.</span>
            </div>

            </div>
            <div className='buy-sell-calc'>
            <div className='img-calc '><GiBuyCard  className='custom-icon '/></div>
            <div className='text-calc'><h2 className='calc-heading'>Rent or Buy Calculator</h2>
            <span className='calc-info'>Estimate when it makes sense to buy or rent</span>
            </div>

            </div>
            <div className='refinance-calc'>
            <div className='img-calc'><GiReceiveMoney  className='custom-icon'/></div>
            <div className='text-calc'><h2 className='calc-heading'>Refinance Calculator</h2>
            <span className='calc-info'>Decide if mortgage refinace is right for you.</span>
            </div>

            </div>

        </div>
    </div>



    </>
  )
}

export default Calculation