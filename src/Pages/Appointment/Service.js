import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span>Try Another Day</span>
                    }
                </p>
                <p>{slots.length}{slots.length > 1 ? ' Spaces ' : ' Space'} Available</p>
                <div class="card-actions justify-center">
                    {/* <button disabled={slots.length === 0} class="btn btn-primary uppercase text-white">Book Appointment</button> */}

                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" class="btn modal-button btn btn-primary uppercase text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;