import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ReviewAdd = () => {
    const {_id,title, img, price, description } = useLoaderData();
    const {user} = useContext(AuthContext);


    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregister';
        const email = user?.email || 'unregister';
        
        const review = form.comment.value;
        
        
    }
    return (
        <div>
             <form onSubmit={handleReview}>
                <div>
                    <h1>Review Add</h1>
                <input type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-accent w-full" readOnly/>
                <textarea className="textarea textarea-bordered w-1/2 my-3 block" placeholder="Comment"></textarea>
                </div>
                
                <input name='comment' className="btn btn-wide my-4" type="submit" value='submit review' />
            </form>
        </div>
    );
};

export default ReviewAdd;