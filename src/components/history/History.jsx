import React from 'react';

const History = ({ mark }) => {
    return (
        <div className='p-1 border-2 border-gray-600 bg-white rounded-md'>
            <p>{mark.title}</p>
        </div>
    );
};

export default History;