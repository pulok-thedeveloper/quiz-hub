import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';


const Home = () => {
    const quizData = useLoaderData().data;
    console.log(quizData)
    return (
        <div>
            <Header></Header>
            <section className='flex gap-3 p-10'>
                {
                    quizData.map(topic=><Topic key={topic.id} topic ={topic}></Topic>)
                }
            </section>
        </div>
        
    );
};

export default Home;