import React from 'react';

const InfoCard = ({ img, cardTitle, cardBgColor }) => {
    return (
        <div className={`card lg:card-side ${cardBgColor} p-5 text-white shadow-xl `}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;