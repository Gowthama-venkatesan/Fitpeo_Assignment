import React from 'react';
import RatingStars from 'react-rating-stars-component';

const ReviewPage = ({ reviews }) => {

    return (
        <div className="p-4 h-[500px] overflow-scroll  mx-auto bg-gray-800 shadow-lg rounded-lg text-white">
            <h1 className="text-2xl font-semibold mb-4">Customer Feedback</h1>
            {reviews.length > 0 ? (
                <ul className="space-y-4">
                    {reviews.map((review) => (
                        <li key={review.id} className="p-4 border-b border-gray-400">
                            <div className=" items-start mb-4">
                               <div className='flex items-center'>
                                    <img
                                        src={review.avatar}
                                        alt={`${review.name}'s avatar`}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <h2 className="text-lg font-semibold mb-1 ml-4">{review.name}</h2>
                                </div>
                                <div className=" justify-center">
                                    <div className="flex items-center mb-2">
                                        <RatingStars
                                            count={5}
                                            value={review.rating}
                                            edit={false} // Set to false as we only want to display the rating
                                            size={24}
                                            activeColor="#ffd700"
                                            />
                                    </div>
                                </div>
                            </div>
                            <p>{review.comment}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                    <p>No reviews available.</p>
                )}
        </div>
    );
};

export default ReviewPage;
