import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment
    const [user, loading, error] = useAuthState(auth);
    const formatDate = format(date, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTreatment(null)
            });

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">

                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots.map((slot, index) => <option key={index} value={slot} >{slot}  </option>)
                            }
                        </select>

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;