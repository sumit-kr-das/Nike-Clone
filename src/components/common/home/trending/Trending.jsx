import React from 'react';
// Components
import Layout from '../../../layout/Layout';
// images
import img1 from '../../../../assets/trending/trending1.webp'
import img2 from '../../../../assets/trending/trending2.webp'
// Stylesheet
import './trending.scss';
import Button from '../../button/Button';

const Trending = () => {
    return (
        <Layout>
            <section className='trending'>
                <p className='headling'>Trending</p>
                <div className='trending_container'>
                    <div>
                        <img src={img1} alt="trending_1" />
                        <div className='trending_content'>
                            <p className='top_txt'>App Drops</p>
                            <p className='main_txt'>Refine Your Limits</p>
                            <Button text="Get It First" />
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt="trending_2" />
                        <div className='trending_content'>
                            <p className='main_txt'>Tees to Own Summer</p>
                            <Button text="Shop Tees" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Trending
