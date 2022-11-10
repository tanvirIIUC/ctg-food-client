import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const storeUser = useLoaderData();
    // console.log(storeUser)
    const [review, setReview] = useState(storeUser)

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;


        // console.log(review)
        fetch(`https://ctg-food-server.vercel.app/updateReview/${storeUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review Update succssfully')
                    form.reset();
                }
            })

    }
    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;

        setReview(newReview);

    }
    return (
        <div className='container mx-auto my-5'>
            <h1 className='font-bold text-center text-3xl my-10'>Update Review</h1>
            <form onSubmit={handleUpdate}>
                <div>


                    <textarea onChange={handleChange} name='reviewCom' defaultValue={storeUser.reviewCom} className="textarea textarea-bordered w-1/2 my-3 block" placeholder="Comment" required></textarea>
                </div>

                <input className="btn btn-wide my-4" type="submit" value='Update review' />
            </form>

        </div>
    );
};

export default UpdateReview;