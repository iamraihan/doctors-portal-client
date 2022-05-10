import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Info from './Info/Info';

const Home = () => {
    return (
        <div className='mx-28'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;