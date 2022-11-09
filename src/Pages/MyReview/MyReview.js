import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {                                                           
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])
    console.log(user)

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure,You want to delete review?');
        if(proceed){
         fetch(`http://localhost:5000/myReview/${id}`,{
             method: 'DELETE'
         })
         .then(res =>res.json())
         .then(data =>{
             console.log(data);
             if(data.deletedCount>0){
                alert('delete successfully');
                const remaining = review.filter( revi => revi._id!==id);
                setReview(remaining);
             }
         })
        }
     }
    return (
        <div className='container mx-auto my-10'>
            {
                review.length?
                    <>
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