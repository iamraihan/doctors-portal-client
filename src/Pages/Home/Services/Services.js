import React from 'react';
import Service from '../Home/Service/Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className='text-primary font-bold text-2xl'>Our Services</h2>
                <h1 className='text-4xl mt-2'>Service We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;