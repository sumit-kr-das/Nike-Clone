import React, { useRef } from 'react';
// Components
import Layout from '../../../layout/Layout';
import SpotlightSlider from './SpotlightSlider';
// Stylesheet
import './spotlight.scss';

const Spotlight = () => {
    const swiperRef = useRef();
    return (
        <Layout>
            <section className='spotlight'>
                <div className='heading_container'>
                    <p className='headling'>In the Spotlight</p>
                    <div className='button_container'>
                        <p>Shop</p>
                        <div className='btn' onClick={() => swiperRef.current.slidePrev()} >
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                        </div>
                        <div className='btn active' onClick={() => swiperRef.current.slideNext()}>
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                        </div>
                    </div>
                </div>
                <SpotlightSlider swiperRef={swiperRef} />
            </section>
        </Layout>
    )
}

export default Spotlight
