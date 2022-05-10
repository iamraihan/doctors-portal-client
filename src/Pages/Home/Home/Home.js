import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='md:mx-28'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;