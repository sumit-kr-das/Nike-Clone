import React from 'react';
// Components
import Button from '../../button/Button';
import Layout from '../../../layout/Layout';

// Stylesheet
import './featured.scss';

const Featured = ({ title, img, text, heading, description1, description2}) => {
    return (
        <Layout>
            <section className='featured'>
                <p className='headling'>{title}</p>
                <div className='img_container'>
                    <img src={img} alt="featured_img" />
                    <div className='featured_details'>
                        <div>
                            <p>{text}</p>
                            <h1>{heading}</h1>
                        </div>
                        <p className='des'>{description1} <br /> {description2}</p>
                        <Button text="Shop" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Featured
