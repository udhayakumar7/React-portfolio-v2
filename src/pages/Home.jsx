import React from 'react';
import Loader from '../components/Loader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Scroller from '../components/Scroller'
import Description from '../components/Description'
import MyWork from '../components/MyWork'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    {/* <Loader /> */}
    <Loader />
   <Header />
   <Hero />
   <Scroller />
   <Description />
   <MyWork />
   <Footer />
   {/* 
  
   */}

    </>
  )
}

export default Home
