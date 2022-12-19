import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons' 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizData.css'

const QuizData = ({ questionData }) => {
    // console.log(questionData)
    const { options, question, correctAnswer, id } = questionData;
    const [correctAns, setCorrectAns] = useState([])


    const handleCorrectAnswer = (option) => {
        if (correctAnswer === option) {
            toast.success("Answer is Correct");
        }
        else {
            toast.error("Answer is Wrong");

        }
    }
    const handleShowAnswer = (correctAnswer) => {
        const correctAns = correctAnswer;
        setCorrectAns(correctAns);
        toast.success(correctAns);
    }

    return (
        <div className='full-card'>
            <div className='flex'>
                <h1 className='size ' >Question  : {question.substring(3, question.length - 4)}</h1>
                <Link>
                    <button className='eye' onClick={() => handleShowAnswer(correctAnswer)}> <FontAwesomeIcon icon={faEye} /></button>
                </Link>
            </div>
            <div className='ans-div'>
                {
                    options.map(option => <div className="ans-border" onClick={() => handleCorrectAnswer(option)}>

                        <input
                            type="radio"
                            name={id}
                            value={option}
                            className="ml-5 dark:bg-gray-800"
                        />
                        <label>
                            {option}
                        </label>
                        <ToastContainer
                            position="top-center"
                            reverseOrder={false}
                            autoClose={3000}
                        />
                    </div>)
                }
            </div>
        </div>

    );
};

export default QuizData;