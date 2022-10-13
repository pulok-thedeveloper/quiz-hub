import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id ,logo, name, total} = topic;
    return (
        <div className='bg-slate-800 rounded text-white p-3'>
            <img className='mb-3' src={logo} alt="" />
            <div>
                <div>
                    <h3 className='text-2xl font-semibold'>{name}</h3>
                    <p>Total Quiz: {total}</p>
                </div>
                <Link to={`/${id}`}>
                    <button className='bg-yellow-400 p-2 w-full mt-3 text-black font-semibold rounded'>Start Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;