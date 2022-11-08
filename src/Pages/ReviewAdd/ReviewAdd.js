import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ReviewAdd = () => {
    const {_id,title, img, price, description } = useLoaderData();
    const {user} = useContext(AuthContext);


    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = user?.email || 'unregister';
        
        const reviewCom = form.comment.value;
        
        const review = {
            service: _id,
            customer:user?.displayName || 'unregister',
            photo : user?.photoURL,
            email,

            reviewCom

        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review add succssfully')
                form.reset();
            }
        })
        .catch(error => console.error(error))
       
        
    }
    return (
        <div>
             <form onSubmit={handleReview}>
                <div>
                    <h1>Review Add</h1>
                <input type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-accent w-full" readOnly/>
                <textarea name='comment' className="textarea textarea-bordered w-1/2 my-3 block" placeholder="Comment" required></textarea>
                </div>
                
                <input  className="btn btn-wide my-4" type="submit" value='submit review' />
            </form>

        </div>
    );
};

export default ReviewAdd;