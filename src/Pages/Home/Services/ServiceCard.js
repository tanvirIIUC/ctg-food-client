import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,img,title,price}=service;
    return (
        <div className="card w-96 glass">
        <figure><img src={img} alt="car!" /></figure>
        <div className="card-body ">
            <div>
            <h2 className="card-title font-bold">{title}</h2>
            <p className='font-bold text-orange-600'>price : {price}</p>
            </div>
           
            <div className="card-actions justify-end">
               <Link to={`/servicedetails/${_id}`}>
               <button className="btn btn-primary">See more</button>
               </Link>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;