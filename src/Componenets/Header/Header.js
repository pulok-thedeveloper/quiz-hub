import React from 'react';
import headerImg from '../../0178bbcd43c8c48225ffda6b3a7141e7.jpg'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-20 py-10 text-left'>
            <div>
                <h1 className='mb-5 leading-tight lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold text-left'>Enrich Your Knowledge with QuizHub</h1>
                <button className='bg-yellow-400 px-5 py-2 rounded font-semibold'>Get Started</button>
            </div>
            <img className='w-2/5' src={headerImg} alt="" />
        </div>
    );
};

export default Header;