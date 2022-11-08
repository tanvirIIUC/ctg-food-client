import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewAdd from '../ReviewAdd/ReviewAdd';

const ServiceDetails = () => {
    const {_id,title, img, price, description } = useLoaderData();
    const {user} = useContext(AuthContext);
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
            <div>
            
               <ReviewAdd></ReviewAdd>
            </div>

        </div>
    );
};

export default ServiceDetails;