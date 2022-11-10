import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setService] = useState([]);
    const [loader, setLoader] = useState(null);


    useEffect(() => {
        setLoader(true)
        fetch('https://ctg-food-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setService(data))
             setLoader(false)
    }, [])
    const cutservice = services.slice(0, 3);
    console.log(cutservice)

    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                  <h1 className=''>{loader && <Spinner></Spinner>}</h1>
                <h1 className='text-5xl font-bold'>Our Special Dishes</h1>
                <p className='my-3'>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop?</p>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-10'>

                {
                    cutservice.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/allservice' className="btn btn-wide"> See more</Link>

            </div>

        </div>
    );
};

export default Services;