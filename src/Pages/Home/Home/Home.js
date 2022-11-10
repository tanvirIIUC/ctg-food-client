import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../../Banner/Banner';
import About from '../About/About';
import Section from '../Section/Section';
import Services from '../Services/Services';

const Home = () => {
    useTitle('ctg-food-home')
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