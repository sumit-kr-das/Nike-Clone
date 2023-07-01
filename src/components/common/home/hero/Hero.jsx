import React from 'react'
// Image
import HeroImg from '../../../../assets/hero.webp';
// Components
import Button from '../../button/Button';
import Layout from '../../../layout/Layout';
// Stylesheet
import './hero.scss';

const Hero = () => {
    return (
        <Layout>
            <header className='hero'>
                <img src={HeroImg} alt="hero_img" />
                <div className='hero_container'>
                    <h1>Introducing Phantom Lina</h1>
                    <p>A boot that changes football for athletes changing everything.</p>
                    <Button text="Shop" />
                </div>
            </header>
        </Layout>
    )
}

export default Hero
