import React, { use } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({blogsPromise}) => {
    const blogs=use(blogsPromise)
    console.log(blogs)
    return (
        <div>
           <h2 className='text-center text-xl font-semibold pb-4'>Total Blogs: {blogs.length}</h2> 
           <div className='space-y-4'>
            {
                blogs.map(blog=><Blog blog={blog}></Blog>)
            }
           </div>
        </div>
    );
};

export default Blogs;