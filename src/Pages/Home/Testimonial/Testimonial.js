import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Home/Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Wilson Henry',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Wilson Henry',
            img: people2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'Wilson Henry',
            img: people3,
            location: 'California'
        },
    ]
    return (
        <section className='py-28'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary font-bold'>Testimonial</h2>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonial;