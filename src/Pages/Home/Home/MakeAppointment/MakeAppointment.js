import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ backgroundImage: `url(${appointment})` }} className='grid md:grid-cols-2 my-28'>
            <div className='hidden md:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex flex-col justify-center items-start mx-3'>
                <h3 className='text-primary text-2xl font-bold'>Appointment</h3>
                <h2 className='text-4xl py-3 text-white'>Make an appointment Today</h2>
                <p className='pb-3 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>


        </section>
    );
};

export default MakeAppointment;