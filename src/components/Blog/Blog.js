import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='body'>
            <h3>1.What is the purpose of react router?</h3>
            <p> <span className='bold'>Ans: </span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h3>2.How does context api work?</h3>
            <p> <span className='bold'>Ans: </span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h3>3.How does useref work in react?</h3>
            <p> <span className='bold'>Ans: </span>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
    );
};

export default Blog;