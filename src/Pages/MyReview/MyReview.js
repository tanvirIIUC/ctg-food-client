import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState({})
    console.log(user)

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])
    return (
        <div className='container mx-auto'>
            <h1>u have {review.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Title</th>
                            <th>Review</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        review.map(rev => <MyReviewRow
                            key={rev._id}
                            result={rev}
                        ></MyReviewRow>)
                    }

                         

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyReview;