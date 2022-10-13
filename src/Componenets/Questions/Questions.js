import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questionsData = useLoaderData().data;
    const {name, questions} = questionsData;
    console.log(questionsData);

    return (
        <div>
            <h3 className='my-5 font-semibold text-2xl'>Quiz of {name}</h3>
            {
                questions.map(ques => <Question key={ques.id} ques ={ques}></Question>)
            }
        </div>
    );
};

export default Questions;