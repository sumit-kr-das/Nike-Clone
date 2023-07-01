import React, { useReducer, useRef } from 'react'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Constant data
import { spotlight } from '../../../../constants';

const Slider = ({ swiperRef, iconic }) => {
    console.log(iconic);
    return (
        <div className='slider'>
            <Swiper
                spaceBetween={12}
                slidesPerView={4.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    iconic?.map((item, indx) => (
                        <SwiperSlide key={indx}>
                            <div className='swiper_item'>
                                <img src={item.img} alt={`${item.id}img`} />
                                <div className='details'>
                                    <div>
                                        <p>{item.type}</p>
                                        {/* <p className='variant'>{item.variant}</p> */}
                                    </div>
                                    {/* <p>₹ {item.price}</p> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider
