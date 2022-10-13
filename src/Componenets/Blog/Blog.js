import React from 'react';

const Blog = () => {
    return (
        <div className='mx-10'>
            <h1 className='text-3xl my-5'>What is the purpose of react router?</h1>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            <h1 className='text-3xl my-5'>How does Context API works?</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h1 className='text-3xl my-5'>How does useRef Hook works?</h1>
            <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
        </div>
    );
};

export default Blog;