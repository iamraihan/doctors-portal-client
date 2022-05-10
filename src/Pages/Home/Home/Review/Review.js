import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className=" flex items-center ">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5 ">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2>{review.name}</h2>
                        <h2>{review.location}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;