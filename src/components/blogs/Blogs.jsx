import React, { use } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({blogsPromise,handleBookMark,handleMarkAsRead}) => {
    const blogs=use(blogsPromise)
    return (
        <div>
           <h2 className='text-center text-xl font-semibold pb-4'>Total Blogs: {blogs.length}</h2> 
           <div className='space-y-4'>
            {
                blogs.map(blog=><Blog
                    key={blog.id}
                    blog={blog}
                    handleBookMark={handleBookMark}
                    handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
            }
           </div>
        </div>
    );
};

export default Blogs;