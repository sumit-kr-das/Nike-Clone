import React from 'react';
// Components
import Hero from '../../components/common/home/hero/Hero';
import Featured from '../../components/common/home/featured/Featured';
import Spotlight from '../../components/common/home/spotlight/Spotlight';
import Trending from '../../components/common/home/trending/Trending';
import SliderContainer from '../../components/common/home/Slider/SliderContainer';
import Layout from '../../components/layout/Layout';
import Essemtials from '../../components/common/home/essentials/Essemtials';
import Categories from '../../components/common/home/categories/Categories';
// Images
import FeaturedImg from '../../assets/featured.webp';
import DontMiss from '../../assets/dont_miss.webp'
// Constant data
import { iconic, sport } from '../../constants';
// Stylesheet
import './homePage.scss';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured
        title="Featured"
        img={FeaturedImg}
        text="Nike Killshot 2 Lether"
        heading="Always Iconic"
        description1="Blending court-side attitude with modern"
        description2="touch for your everyday style."
      />
      <Spotlight />
      <Trending />
      <Featured
        title="Don't Miss"
        img={DontMiss}
        text="Mini-Me Loocks"
        heading="Make a Double Play"
        description1="Twin with your mini in must-have looks in a range of size."
        description2=""
      />
      <Layout>
        <SliderContainer
          title="Always Iconic"
          data={iconic}
          isPadding={false}
        />
      </Layout>
      <SliderContainer
        title="Shop By Sport"
        data={sport}
        isPadding={true}
      />
      <Essemtials />
      <Categories />
    </>
  )
}

export default HomePage
