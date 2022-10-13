import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questionsData = useLoaderData().data;
    const {name, questions} = questionsData;
    console.log(questions);


    return (
        <div>
            <h3 className='my-5 font-semibold text-2xl'>Quiz of {name}</h3>
            {
                questions.map(qs => <Question key={qs.id} qs = {qs}></Question>)
            }
        </div>
    );
};

export default Questions;