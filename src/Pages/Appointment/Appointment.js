import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AvailableAppointments from './AvailableAppointments';
import BannerAppointment from './BannerAppointment';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <section>
            <BannerAppointment date={date} setDate={setDate}></BannerAppointment>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </section>
    );
};

export default Appointment;