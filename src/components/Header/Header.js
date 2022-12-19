import React from 'react';
import person from './quiz.png'
import './Header.css'
import Shop from '../Shop/Shop';

const Header = () => {

    return (
        <div>
            <div className='flex'>
                <div>
                    <img src={person} alt="" />
                </div>
                <div className='text'>
                    <h1 className='first'>Welcome to the world’s largest quiz community.</h1>
                    <h4>Play a quiz . Join a virtual or live event. </h4>
                    <h3 className='last'>There's a gift for everyone!</h3>
                </div>
            </div>

            <div>
            <Shop></Shop>
            </div>
        </div>

    );
};

export default Header;