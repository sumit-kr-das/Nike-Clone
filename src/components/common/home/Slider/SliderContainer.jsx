import React, { useRef } from 'react';
// StyleSheet
import './sliderContainer.scss';
import Slider from './Slider';


const SliderContainer = ({ title, data, isPadding }) => {
  const swiperRef = useRef();
  return (
    <section className='main_slider'>
      <p className='headling' style={{paddingLeft: isPadding && "48px" }}>{title}</p>
      <div className='main_slider_container'>
        <div className='btn left' onClick={() => swiperRef.current.slidePrev()} >
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
        </div>
        <Slider swiperRef={swiperRef} iconic={data} />
        <div className='btn right' onClick={() => swiperRef.current.slideNext()}>
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
        </div>
      </div>
    </section>
  )
}

export default SliderContainer
