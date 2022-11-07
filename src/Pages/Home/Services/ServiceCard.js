import React from 'react';

const ServiceCard = ({service}) => {
    const {img,title,price}=service;
    return (
        <div className="card w-96 glass">
        <figure><img src={img} alt="car!" /></figure>
        <div className="card-body ">
            <div>
            <h2 className="card-title font-bold">{title}</h2>
            <p className='font-bold text-orange-600'>price : {price}</p>
            </div>
           
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;