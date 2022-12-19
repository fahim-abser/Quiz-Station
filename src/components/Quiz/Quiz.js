import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {questions,name}=quiz;
    
    return (
        <div>
             <h1 className="title">  {name} Quiz </h1>
            {
                questions.map(questionData => 
                    <QuizData key={questionData.id}
                    questionData={questionData}></QuizData>
                    )
            }
        </div>
    );
};

export default Quiz;