import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewShow = ({ id }) => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://ctg-food-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    console.log(reviews)
    const results = reviews.filter(review => review.service === id);
    console.log(results)
    return (
        <div>
            <h1 className='text-center font-bold text-3xl py-5'>Review</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Review</th>

                        </tr>
                    </thead>
                    {
                        results.map(result => <ReviewCard
                            key={result._id}
                            result={result}
                        ></ReviewCard>)
                    }


                </table>
            </div>

        </div>
    );
};

export default ReviewShow;