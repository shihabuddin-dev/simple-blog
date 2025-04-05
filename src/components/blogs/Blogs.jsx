import React, { use } from 'react';

const Blogs = ({blogsPromise}) => {
    const blogs=use(blogsPromise)
    console.log(blogs)
    return (
        <div>
           <h1>Hello</h1> 
        </div>
    );
};

export default Blogs;<h1>Hello</h1>