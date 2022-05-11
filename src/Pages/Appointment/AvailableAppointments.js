import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='py-20'>
            <h2 className='text-center text-secondary text-2xl'>Available Appointments On {format(date, 'PP')}</h2>
            <div>

            </div>
        </div>
    );
};

export default AvailableAppointments;