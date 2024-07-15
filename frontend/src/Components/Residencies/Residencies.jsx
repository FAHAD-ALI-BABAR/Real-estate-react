import React from 'react'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../Slider/Slider.json'
import { slidersettings } from '../Slider/common'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



const Residencies = () => {
  return (
    <>
    <section className='residence-sec'>
        <div className='residence-head'>
            <div className='residence-desc'>
                <h2 className='residence-h1'>Best Choice</h2>
                <h3 className='residence-h3'>Popular Residencies</h3>
            </div>
            <div className='swiper-div'>
            <Swiper {...slidersettings}>
                <SliderButtons/>
                {
                    data.map((cards,i)=>(
                        <SwiperSlide key={i}>
                            <div className='flexColStart swiper-cards'>
                                <img src={cards.image} alt='property'>
                                </img>
                                <div className='residence-price'>
                                <span style={{color:"orange"}}>$</span><span style={{color:"grey"}}>{cards.price}</span>
                                <p className='residence-h1'>{cards.name}</p>
                                <p style={{display:"flex", flexWrap:"wrap", width:"35vh", fontSize:"10px"}}>{cards.details}</p></div>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper></div>
        </div>
    </section>
    </>
  )
}

export default Residencies
const SliderButtons=()=>{
    const swiper=useSwiper();
    return(
        <div className='residence-btn'>
            <button onClick={()=>{swiper.slidePrev()}}><FaAngleLeft /></button>
            <button onClick={()=>{swiper.slideNext()}}><FaAngleRight /></button>
        </div>
    )
}