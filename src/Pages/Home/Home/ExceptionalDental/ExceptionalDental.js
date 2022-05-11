import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../Shared/PrimaryButton/PrimaryButton';

const ExceptionalDental = () => {
    return (
        <div className="card card-side max-w-7xl	mx-auto bg-base-100 shadow-xl">
            <figure><img className='hidden md:block' src={treatment} alt="Movie" /></figure>
            <div className=" flex flex-col justify-center items-start mx-12 ">
                <h2 className="card-title text-4xl">Exceptional Dental Care, on Your Terms</h2>
                <p className='py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <div className="card-actions ">
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;