import React from 'react';

const Section = () => {
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 container mx-auto  my-10'>
            <div className="card w-96 bg-base-100 ">
                <div className="card-body ">
                    <p></p>
                    <h2 className="card-title">Easy to order</h2>
                    <p>Then Ctg food Bangladesh is the right destination for you! Ctg food offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier.</p>
                </div>
                
            </div>
            <div className="card w-96 bg-base-100 ">
                <div className="card-body ">
                    <p></p>
                    <h2 className="card-title ">Best quality</h2>
                    <p>Did you know you can order your groceries and more from Ctg food, too? Check out Ctg food shops for favourite partners like Unimart, Suborno, Shwapno, Bengal Meat, and much more.</p>
                </div>
               
            </div>
            <div className="card w-96 bg-base-100 ">
                <div className="card-body ">
                    <p></p>
                    <h2 className="card-title">Fastest delivery</h2>
                    <p>Our online food delivery service has it all, whether you fancy a juicy burger from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, Ctg food Bangladesh has over 2000 restaurants available from Dhaka to Chittagong through to Sylhet.</p>
                </div>
               
            </div>
        </div>
    );
};

export default Section;