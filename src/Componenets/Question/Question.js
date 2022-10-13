import React from 'react';
import Option from '../Option/Option';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({qs}) => {
    const {id, options, correctAnswer, question} = qs;

    const answerStatus = (selectedAns) => {
        if(selectedAns.option === correctAnswer){
            toast("Right Answer");
        }
        else{
            toast("Wrong Answer");
        }
    }
    const rightAnswer = () => {
        toast(correctAnswer);
    }

    return (
        <div className='relative my-8 mx-20 text-left bg-slate-300 p-5 rounded'>
            <button onClick={rightAnswer} className='bg-yellow-400 p-1 rounded absolute top-5 right-5'><EyeIcon className="h-6 w-6 text-black"/></button>
            <h3 className='mb-3'>{question}</h3>
            <div className='text-left'>
            {
                options.map((option, idx) => <Option key={idx} answerStatus={answerStatus} name={id} option={option}></Option>)
            }
            </div>
        </div>
    );
};

export default Question;