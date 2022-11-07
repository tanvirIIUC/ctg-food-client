import React from 'react';
import aboutPic from '../../../Assets/about.jpg'

const About = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-center font-bold text-2xl'>About Us</h1>
            <div className="hero  bg-base-200 ">

                <div className="hero-content flex-col lg:flex-row">
                    <img src={aboutPic} className="max-w-sm rounded-lg shadow-2xl" alt="" />

                    <div>
                        <h1 className="text-5xl font-bold">Our Lovely Customer Loves Our Food</h1>
                        <p className="py-6">Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then Ctg food Bangladesh is the right destination for you! Ctg food offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier. Our online food delivery service has it all, whether you fancy a juicy burger from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, Ctg food Bangladesh has over 2000 restaurants available from Dhaka to Chittagong through to Sylhet. Did you know you can order your groceries and more from Ctg food, too? Check out Ctg food shops for favourite partners like Unimart, Suborno, Shwapno, Bengal Meat, and much more. Sit back and relax – let Ctg food Bangladesh take the pressure off your shoulders.</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;