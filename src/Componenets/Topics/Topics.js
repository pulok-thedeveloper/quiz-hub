import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizData = useLoaderData().data;
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10'>
            {
                quizData.map(topic=><Topic key={topic.id} topic ={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;