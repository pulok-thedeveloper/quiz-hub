import React from 'react';
import './Option.css';

import { ToastContainer } from 'react-toastify';

const Option = ({option,name,answerStatus}) => {
    return (
        <div className='my-3 p-3 rounded option'>
            <input type="radio" name={name} id={option} />
            <label onClick={()=>answerStatus({option})} className=' leading-10 hover:bg-slate-500 p-3 rounded' htmlFor={option}>{option}</label>
            <ToastContainer />
        </div>
    );
};

export default Option;