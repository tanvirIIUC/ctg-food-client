import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewAdd from '../ReviewAdd/ReviewAdd';
import ReviewShow from '../ReviewShow/ReviewShow';

const ServiceDetails = () => {

    useTitle('Service Details')
    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user)



    return (
        <div className='container mx-auto'>
            {/* details section */}
            <div className="card my-5 glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price :{price}</p>
                    <p>Description :{description}</p>

                </div>
            </div>
            {/*  Review section */}
            <div className='my-10'>
                <ReviewShow id={_id}></ReviewShow>
            </div>


            {/* review add */}
            <div>

                <ReviewAdd></ReviewAdd>
            </div>

        </div>
    );
};

export default ServiceDetails;