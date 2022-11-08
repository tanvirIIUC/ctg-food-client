import React from 'react';

const ReviewCard = ({ result }) => {
    const { customer, email, photo, reviewCom } = result
    return (
        
            <tbody>

                <tr>
                    <th>

                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{customer}</div>

                            </div>
                        </div>
                    </td>
                    <td>
                        {reviewCom}
                        <br />
                    </td>
                </tr>
            </tbody>
       
    );
};

export default ReviewCard;




