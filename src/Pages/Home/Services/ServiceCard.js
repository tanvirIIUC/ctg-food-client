import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price, description } = service;
    return (
        <div className="card w-96 glass">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} style={{ objectFit: 'cover' }} alt="" />
                </PhotoView>
            </PhotoProvider>
            {/* <figure><img src={img} alt="car!" /></figure> */}
            <div className="card-body ">
                <div>
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className='font-bold text-orange-600'>price : {price}</p>
                    <p><small>{description.slice(0, 100)}.....</small></p>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;