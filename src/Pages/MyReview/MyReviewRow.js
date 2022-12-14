import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ result, handleDelete }) => {
    const { customer, email, photo, reviewCom, service, _id } = result;
    const [revservice, setRevservice] = useState({})

    useEffect(() => {
        fetch(`https://ctg-food-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setRevservice(data))
    }, [service])




    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-square btn-outline'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                revservice?.img &&
                                <img src={revservice.img} alt="Avatar Tailwind CSS Component" />
                            }

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{revservice.title}</div>

                    </div>
                </div>
            </td>
            <td>
                {reviewCom}
                <br />

            </td>
            <td>{email}</td>
            <th>
                <label>
                    <Link to={`/updateReview/${_id}`}>
                        <button className='btn btn-square btn-outline'>Edit</button>
                    </Link>

                </label>
            </th>

        </tr>
    );
};

export default MyReviewRow;