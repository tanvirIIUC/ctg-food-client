import React from 'react';
import Banner from '../../Banner/Banner';
import About from '../About/About';
import Section from '../Section/Section';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Section></Section>
            <About></About>
        </div>
    );
};

export default Home;