import React from 'react';
// Components
import Layout from '../../../layout/Layout';
// Images
import img1 from '../../../../assets/essentials/ess1.webp'
import img2 from '../../../../assets/essentials/ess2.webp'
import img3 from '../../../../assets/essentials/ess3.webp'
// Stylesheet
import './essentials.scss';
import Button from '../../button/Button';

const Essemtials = () => {
    return (
        <Layout>
            <section className='essentials'>
                <p className='headling'>The Essentials</p>
                <div className='essentials_container'>
                    <div>
                        <img src={img1} alt="essentials_img" />
                        <Button text="Men's" />
                    </div>
                    <div>
                        <img src={img2} alt="essentials_img" />
                        <Button text="Women's" />
                    </div>
                    <div>
                        <img src={img3} alt="essentials_img" />
                        <Button text="Kid's" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Essemtials
