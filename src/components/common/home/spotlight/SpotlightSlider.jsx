import React, { useReducer, useRef } from 'react'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Constant data
import { spotlight } from '../../../../constants';

const SpotlightSlider = ({ swiperRef }) => {

    return (
        <div className='spotlight_slider'>
            <Swiper
                spaceBetween={12}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    spotlight?.map((item, indx) => (
                        <SwiperSlide key={indx}>
                            <div className='swiper_item'>
                                <img src={item.img} alt={`${item.id}img`} />
                                <div className='details'>
                                    <div>
                                        <p>{item.title}</p>
                                        <p className='variant'>{item.variant}</p>
                                    </div>
                                    <p>₹ {item.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SpotlightSlider
