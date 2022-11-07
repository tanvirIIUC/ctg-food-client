import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setService]= useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    console.log(services)
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                
                <h1 className='text-5xl font-bold'>Our Special Dishes</h1>
                <p className='my-3'>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop?</p>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-10'>
                
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)  
                }
            </div>
        </div>
    );
};

export default Services;