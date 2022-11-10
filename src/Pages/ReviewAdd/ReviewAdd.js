import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ReviewAdd = () => {
    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;

        const email = user?.email || 'unregister';

        const reviewCom = form.comment.value;

        const review = {
            service: _id,
            ptitle: title,
            customer: user?.displayName || 'unregister',
            photo: user?.photoURL,
            email,

            reviewCom

        }
        fetch('https://ctg-food-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review add succssfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))


    }
    return (
        <div>
            {
                user?.email ?
                    <form onSubmit={handleReview}>
                        <div>
                            <h1 className='text-center font-bold text-3xl py-5'>Review Add</h1>
                            <input type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-accent w-full" readOnly />
                            <textarea name='comment' className="textarea textarea-bordered w-1/2 my-3 block" placeholder="Comment" required></textarea>
                        </div>

                        <input className="btn btn-wide my-4" type="submit" value='submit review' />
                    </form>
                    :
                    <div className='text-center my-10'>
                        <h1 className='text-3xl font-bold'>Please Log in to add review</h1>
                        <Link className="btn btn-wide my-5" to='/login'> Log in</Link>
                    </div>



            }


        </div>
    );
};

export default ReviewAdd;