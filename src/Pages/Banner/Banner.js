import React from 'react';
import { Link } from 'react-router-dom';
import imgbanner from '../../Assets/Banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen container mx-auto my-10" style={{ backgroundImage: `url("https://southgatemedical.com.au/wp-content/uploads/2020/11/junk-food.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Be The Fastest In Delivering Your Food</h1>
                    <p className="mb-5">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                        It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                        Interested? Let's start our partnership today!</p>
                        <Link to="/register" className='me-2 btn btn-primary font-bold'>Register</Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;