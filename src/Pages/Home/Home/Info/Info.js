import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            <InfoCard cardBgColor='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard cardBgColor='bg-accent' cardTitle='Visit our location' img={marker}></InfoCard>
            <InfoCard cardBgColor='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact Us now' img={phone}></InfoCard>
        </div>
    );
};

export default Info;