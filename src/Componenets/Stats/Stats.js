import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis} from 'recharts';

const Stats = () => {
    const quizData = useLoaderData().data;
    console.log(quizData)
    return (
        <div className='flex flex-col justify-center items-center'>
        <h1 className='my-10 text-5xl'>Number of Questions</h1>
            <BarChart className='mx-auto' width={400} height={300} data={quizData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Stats;