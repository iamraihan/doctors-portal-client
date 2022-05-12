import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className=" text-2xl font-bold text-secondary text-center">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span>Try Another Day</span>
                    }
                </p>
                <p>{slots.length}{slots.length > 1 ? ' Spaces ' : ' Space'} Available</p>
                <div className="card-actions justify-center">
                    {/* <button disabled={slots.length === 0} className="btn btn-primary uppercase text-white">Book Appointment</button> */}

                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal" className=" modal-button btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;