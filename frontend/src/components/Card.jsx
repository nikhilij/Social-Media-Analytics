import React from 'react';

const Card = ({ title, content }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    );
};

export default Card;
