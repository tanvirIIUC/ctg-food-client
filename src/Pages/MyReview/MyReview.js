import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    useTitle('My review')
    const { user, logOut } = useContext(AuthContext);
    const [review, setReview] = useState([])
    // console.log(user)

    useEffect(() => {
        fetch(`https://ctg-food-server.vercel.app/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                /*  if(res.status === 401 || res.status === 403){
   
                 return logOut()
                 } */
                return res.json()
            })
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,You want to delete review?');
        if (proceed) {
            fetch(`https://ctg-food-server.vercel.app/myReview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('delete successfully');
                        const remaining = review.filter(revi => revi._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }
    return (
        <div className='container mx-auto my-10'>

            {
                review?.length ?
                    <>
                        <h1 className='font-bold text-center text-3xl my-5'>My All Review</h1>
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
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        review.map(rev => <MyReviewRow
                                            key={rev._id}
                                            result={rev}
                                            handleDelete={handleDelete}
                                        ></MyReviewRow>)
                                    }



                                </tbody>


                            </table>
                        </div>
                    </>
                    :
                    <h1 className='font-bold text-2xl text-center'> No reviews were added</h1>

            }



        </div>
    );
};

export default MyReview;