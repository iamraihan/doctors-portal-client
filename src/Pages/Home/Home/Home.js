import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;