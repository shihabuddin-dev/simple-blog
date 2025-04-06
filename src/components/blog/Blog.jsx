import React from 'react';

const Blog = ({ blog }) => {
    const { cover, author_img, author, posted_date
        , reading_time, title, hashtags } = blog
    const [first, second] = hashtags
    return (
        <div className='space-y-1 md:space-y-2'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex md:gap-2'>
                    <div>
                        <img className='w-12' src={author_img} alt="" />
                    </div>
                    <div>
                        <h2 className='md:text-2xl font-bold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    {reading_time} Minutes Read
                </div>
            </div>
            <h3 className='text-xl md:text-3xl font-semibold'>{title}</h3>
            <p>#{first} #{second}</p>
            <button className='btn btn-sm md:btn btn-normal'>Mark as Read</button>
        </div>
    );
};

export default Blog;